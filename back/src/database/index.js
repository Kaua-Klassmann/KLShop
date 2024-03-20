import Sequelize from "sequelize";
import Fabricante from '../models/Fabricante.js';
import GraphicCard from '../models/GraphicCard.js';
import Processador from "../models/Processador.js";
import Soquete from '../models/Soquete.js';
import databaseConfig from '../config/database.js';

const models = [
    GraphicCard,
    Processador,
    Soquete,
    Fabricante
];

class Database {
    
    constructor() {
        this.init();
    };

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models));
    };

};

export default new Database();