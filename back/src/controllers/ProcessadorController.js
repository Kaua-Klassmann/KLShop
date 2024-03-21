import Processador from '../models/Processador.js';

class ProcessadorController {

    async index(req, res) {
        const processors = await Processador.findAll();

        return res.send(processors);
    };

    async show(req, res) {
        const processor = await Processador.findByPk(req.params.id); 

        return res.send(processor);
    };

};

export default new ProcessadorController();