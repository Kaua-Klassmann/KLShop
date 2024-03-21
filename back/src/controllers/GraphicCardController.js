import GraphicCard from '../models/GraphicCard.js';

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

        return res.send(graphicCard);
    };

};

export default new GraphicCardController();