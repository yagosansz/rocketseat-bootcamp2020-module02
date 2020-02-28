import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    // connection with external service to send emails
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null // some email services do not require auth
    });
  }

  sendMail(message) {
    this.transporter.sendMail({
      ...mailConfig.default,
      ...message
    });
  }
}

export default new Mail();
