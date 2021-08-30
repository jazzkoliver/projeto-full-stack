const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    cpf: { type: String, unique: true, required: true },
    name: { type: String, unique: false, required: true },
    dtnasc: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    rua: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    profissao: { type: String, unique: false, required: true },
    celular: { type: String, unique: false, required: true }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);