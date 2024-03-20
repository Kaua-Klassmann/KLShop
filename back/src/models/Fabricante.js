import { DataTypes, Model } from "sequelize";

class Fabricante extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },

                nome: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                sequelize
            }
        );

        return this;
    };

    static associate(models) {
        this.hasMany(models.GraphicCard, { foreignKey: 'fabricante' });
        this.hasMany(models.Processador, { foreignKey: 'fabricante'});
    };
};

export default Fabricante;