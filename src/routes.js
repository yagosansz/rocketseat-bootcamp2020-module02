import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Yago Santos',
    email: 'yago@me.com',
    password_hash: '12312312'
  });

  return res.json(user);
});

export default routes;
