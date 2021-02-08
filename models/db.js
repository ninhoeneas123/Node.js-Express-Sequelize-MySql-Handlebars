const Sequelize = require('sequelize');

const sequelize = new Sequelize('postapp', 'root', 'eneas123', {//
    host:"localhost",
    dialect:'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}
//Criar um banco de dados chamado postapp ou alterar o nome do banco de dados para um de sua preferencia
//Create a database called postapp or change the database name to one of your own