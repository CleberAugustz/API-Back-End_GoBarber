import { Router, response } from 'express';

import multer from 'multer';

import uploadConfig from '@config/upload';
import { celebrate, Segments, Joi } from 'celebrate';

import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';
import IUsersRepository from '../../typeorm/repositories/UsersRepository';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarControler from '../controllers/UserAvatarController';

const usersRouter = Router();
const userAvatarControler = new UserAvatarControler();

const usersController = new UsersController();
const upload = multer(uploadConfig);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarControler.update,
);
export default usersRouter;
