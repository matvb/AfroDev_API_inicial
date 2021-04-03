const Agendamento = require('../models/Agendamento');

module.exports = app => {
    app.get('/agendamentos', (req, resp) => {
        Agendamento.listagem(resp);
    });

    app.get('/agendamentos/:id', (req, resp) => {
        const id = parseInd(req.params.id);
        Agendamento.buscaPorId(id, resp);
    });

    app.post('/agendamentos', (req, resp) => {
        const agendamento = req.body;
        Agendamento.inserir(agendamento, resp);
    });

    
};
