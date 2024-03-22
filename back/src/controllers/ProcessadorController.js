import Processador from '../models/Processador.js';
import Fabricante from '../models/Fabricante.js';

class ProcessadorController {

    async index(req, res) {
        const processors = await Processador.findAll();

        return res.send(processors);
    };

    async show(req, res) {
        const processor = await Processador.findByPk(req.params.id);

        if(!processor) {
            return res.status(400).send({error: 'Erro de index inválido'});
        }

        const fabricante = await Fabricante.findByPk(processor.fabricante);

        const { id, nome } = fabricante;

        processor.fabricante = {
            id,
            nome
        }

        return res.send(processor);
    };

};

export default new ProcessadorController();