import { DataTypes, Model } from "sequelize";

class GraphicCard extends Model {
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
                    type: DataTypes.DECIMAL
                },

                clock: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },

                memoria: {
                    type: DataTypes.INTEGER
                },

                DDR: {
                    type: DataTypes.STRING
                },

                bits: {
                    type: DataTypes.INTEGER
                },

                imagem: {
                    type: DataTypes.STRING
                },

                integrado: {
                    type: DataTypes.BOOLEAN,
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
        this.belongsTo(models.Fabricante, { foreignKey: 'fabricante' });
        this.hasMany(models.Processador, { foreignKey: 'video' });
    };
};

export default GraphicCard;