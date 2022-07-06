import FieldMessage from './fieldMessage';
import Reminders from '../models/Reminders';

module.exports = () => {
  const validations = {};

  validations.getReminderById = async (req) => {
    const errors = [];
    const { reminderId } = req;

    const reminder = await Reminders.findByPk(Number(reminderId));
    if (!reminder) {
      errors.push(new FieldMessage('reminderId', 'Reminder not found'));
      return errors;
    }

    return errors;
  };

  validations.createReminder = async (req) => {
    const errors = [];
    // const { name, reminder_type, description, base_time, recorrence } = req.body;

    // const schema = Yup.object().shape({
    //   name: Yup.string().nullable().trim().strict().required(Messages.OBRIGATORY_NAME),
    //   email: Yup.string().nullable().trim().email(Messages.INVALID_MAIL).strict().required(Messages.OBRIGATORY_MAIL),
    //   pass: Yup.string().nullable().trim().strict().required(Messages.INVALID_PASS).min(8, Messages.MIN_CHARS_PASSWORD),
    // });

    // try {
    //   await schema.validate(req.body, { abortEarly: false });
    // } catch (err) {
    //   err.inner.forEach((error) => {
    //     errors.push(new FieldMessage(error.path, error.message));
    //   });
    //   return errors;
    // }

    // const existingUser = await Users.findOne({
    //   where: { email },
    // });

    // if (existingUser) {
    //   errors.push(new FieldMessage('email', Messages.IN_USE_MAIL));
    //   return errors;
    // }

    return errors;
  };

  return validations;
};
