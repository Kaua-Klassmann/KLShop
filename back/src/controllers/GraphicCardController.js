import GraphicCard from '../models/GraphicCard.js';
import Fabricante from '../models/Fabricante.js';

class GraphicCardController {

    async index(req, res) {
        const graphicCards = await GraphicCard.findAll({
            where: {
                integrado: false
            }
        });

        return res.send(graphicCards);
    };

    async show(req, res) {
        const graphicCard = await GraphicCard.findByPk(req.params.id);

        if(!graphicCard) {
            return res.status(400).send({error: 'Erro de index inválido'});
        }

        const fabricante = await Fabricante.findByPk(graphicCard.fabricante);

        const { id, nome } = fabricante;

        graphicCard.fabricante = {
            id,
            nome
        }

        return res.send(graphicCard);
    };

};

export default new GraphicCardController();