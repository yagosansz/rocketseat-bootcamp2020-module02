import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // const [bearer, token] = authHeader.split(' ');
  const [, token] = authHeader.split(' ');

  try {
    // will return the payload
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    // user authenticated, now controller can be accessed
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid Token' });
  }
};
