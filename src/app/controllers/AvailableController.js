import {
  startOfDay,
  endOfDay,
  setHours,
  setMinutes,
  setSeconds,
  format,
  isAfter
} from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const searchDate = parseInt(date, 10);

    // find all appointments dates for specified provider
    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.params.providerId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)]
        }
      }
    });

    // Provider schedule
    const schedule = [
      '08:00', // 2020-02-29 08:00:00
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00'
    ];

    // 1 - Check if it is not a past date
    // 2 - Hasn't been scheduled as one of the listed appointments
    const available = schedule.map(time => {
      const [hour, minute] = time.split(':');
      // 2020-02-29 08:00:00
      const value = setSeconds(
        setMinutes(setHours(searchDate, hour), minute),
        0
      );

      return {
        time, // will be used to display in the front-end
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        available:
          isAfter(value, new Date()) &&
          !appointments.find(a => format(a.date, 'HH:mm') === time)
      };
    });

    return res.json(available);
  }
}

export default new AvailableController();
