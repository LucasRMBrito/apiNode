const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://lucasrogermb:projetotcc123@cluster0.jcsx1sp.mongodb.net/teste1');
};

module.exports = startDB;

//usando o mongoose para conectar no mongodb