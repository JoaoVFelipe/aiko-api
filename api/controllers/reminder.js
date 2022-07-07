import Reminders from '../models/Reminders';

module.exports = () => {
  const controller = {};

  controller.getReminderById = async (req, res) => {
    const { reminderId } = req;
    const userData = await Reminders.findByPk({ id: reminderId });
    return res.status(200).send(userData);
  };

  controller.createReminder = async (req, res) => {
    await Reminders.create({ ...req.body });
    return res.status(201).send();
  };

  return controller;
};
