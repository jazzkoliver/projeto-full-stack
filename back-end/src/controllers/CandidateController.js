const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { cpf, name, dtnasc, cep, rua, numero, bairro, cidade, email, profissao, celular } = req.body;

        const newCandidate = new Candidate();

        newCandidate.cpf = cpf;
        newCandidate.name = name;
        newCandidate.dtnasc = dtnasc;
        newCandidate.cep = cep;
        newCandidate.rua = rua;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.email = email;        
        newCandidate.profissao = profissao;
        newCandidate.celular = celular;        

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro no cadastro.');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};