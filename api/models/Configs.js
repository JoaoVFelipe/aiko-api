import Sequelize, { DataTypes, Model } from 'sequelize';
class Configs extends Model {
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
            config: DataTypes.JSONB
        }, { sequelize });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'user',
        });
    }
}


export default Configs;
