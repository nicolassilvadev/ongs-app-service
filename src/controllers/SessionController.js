const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const {id} = request.body;

        const ong = await connection('ongs').where('id', id).select('name').first();

        if (!ong) {
            return response.status(400).json({error: 'nao tem ong com esse id ai nao parca'});
        }

        return response.json(ong);
    }
}