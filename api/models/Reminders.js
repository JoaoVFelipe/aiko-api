import Sequelize, { DataTypes, Model } from 'sequelize';
class Reminders extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

        get() {
          return String(this.getDataValue('id'));
        },
      },
      name: DataTypes.STRING,
      reminder_type: DataTypes.INTEGER,
      description: DataTypes.STRING,
      base_time: DataTypes.BIGINT,
      recorrence: DataTypes.JSON,
      duration: DataTypes.BIGINT,
      active: DataTypes.BOOLEAN,
    }, { sequelize });

    return this;
  }

  static associate(models) {
  }
}


export default Reminders;
