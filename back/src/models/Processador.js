import { DataTypes, Model} from 'sequelize';

class Processador extends Model {
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
                },

                preco: {
                    type: DataTypes.DECIMAL,
                    allowNull: false
                },

                litografia: {
                    type: DataTypes.STRING,
                    allowNull: false
                },

                clock: {
                    type: DataTypes.DECIMAL,
                    allowNull: false
                },

                clockTurbo: {
                    type: DataTypes.DECIMAL,
                    allowNull: false
                },

                cache: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },

                core: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },

                thread: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },

                TDP: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },

                imagem: {
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
        this.belongsTo(models.Soquete, { foreignKey: 'soquete' });
        this.belongsTo(models.GraphicCard, { foreignKey: 'video' });
        this.belongsTo(models.Fabricante, { foreignKey: 'fabricante' });
    };
};

export default Processador;