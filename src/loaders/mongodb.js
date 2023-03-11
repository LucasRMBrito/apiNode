const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://lucasrogermb:projetotcc123@cluster0.0z8bkig.mongodb.net/test');
};

module.exports = startDB;