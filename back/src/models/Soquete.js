import { DataTypes, Model} from 'sequelize';

class Soquete extends Model {
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
        this.hasMany(models.Processador, { foreignKey: 'soquete' });
    };
};

export default Soquete;