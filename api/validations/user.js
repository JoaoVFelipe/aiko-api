import Users from '../models/Users';
import FieldMessage from './fieldMessage';
import * as Yup from 'yup';
import Messages from './messages';

module.exports = () => {
  const validations = {};

  validations.getProfile = async (req) => {
    const errors = [];
    const { userId } = req;

    const user = await Users.findByPk(Number(userId));
    if (!user) {
      errors.push(new FieldMessage('userId', 'User not found'));
      return errors;
    }

    return errors;
  };

  validations.createProfile = async (req) => {
    const errors = [];
    const { pass, email } = req.body;

    const schema = Yup.object().shape({
      username: Yup.string().nullable().trim().strict().required(Messages.OBRIGATORY_NAME),
      email: Yup.string().nullable().trim().email(Messages.INVALID_MAIL).strict().required(Messages.OBRIGATORY_MAIL),
      pass: Yup.string().nullable().trim().strict().required(Messages.INVALID_PASS).min(8, Messages.MIN_CHARS_PASSWORD),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((error) => {
        errors.push(new FieldMessage(error.path, error.message));
      });
      return errors;
    }

    const existingUser = await Users.findOne({
      where: { email },
    });

    if (existingUser) {
      errors.push(new FieldMessage('email', Messages.IN_USE_MAIL));
      return errors;
    }

    return errors;
  };

  validations.updateProfile = async (req) => {
    const errors = [];
    const { userId } = req;
    const { pass, email } = req.body;

    const existingUser = await Users.findByPk(Number(userId));
    if (!existingUser) {
      errors.push(new FieldMessage('id', Messages.USER_NOT_FOUND));
    }

    const schema = Yup.object().shape({
      username: Yup.string().strict().trim().nullable(),
      email: Yup.string().strict().trim().nullable().email(Messages.INVALID_MAIL),
      pass: Yup.string().strict().trim().nullable().min(8, Messages.MIN_CHARS_PASSWORD),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((error) => {
        errors.push(new FieldMessage(error.path, error.message));
      });
      return errors;
    }

    if (email) {
      const existingUser = await Users.findOne({ where: { email } });
      if (existingUser) {
        errors.push(new FieldMessage('email', Messages.IN_USE_MAIL));
        return errors;
      }
    }

    return errors;
  };

  return validations;
};
