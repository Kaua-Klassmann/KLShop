import Processador from '../models/Processador.js';

class ProcessadorController {

    async index(req, res) {
        const processors = await Processador.findAll();

        return res.send(processors);
    };

};

export default new ProcessadorController();