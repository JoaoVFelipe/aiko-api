import config from 'config';
import ValidateExceptions from '../exceptions/validate';
import authMiddleware from '../middlewares/auth';

module.exports = (app) => {
  const controller = app.controllers.reminder;
  const validation = app.validations.reminder;

  const baseURL = `${config.get('base_url')}/reminder`;

  const baseValidateAndControllerCall = async (name, req, res) => {
    const errors = await validation[name](req, res);
    if (errors.length === 0) {
      controller[name](req, res);
    } else {
      res.status(400).send(new ValidateExceptions(400, 'An error ocurred!', errors));
    }
  };

  app.get(baseURL, authMiddleware, (req, res) => {
    baseValidateAndControllerCall('getReminderById', req, res);
  });

  app.post(`${baseURL}/create`, authMiddleware, (req, res) => {
    baseValidateAndControllerCall('createReminder', req, res);
  });
};