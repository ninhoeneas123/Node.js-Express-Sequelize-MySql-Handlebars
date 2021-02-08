const db = require('./db');

const Post = db.sequelize.define('posts',{
    title: db.Sequelize.STRING,
    content: db.Sequelize.TEXT,
})

//Post.sync({ force:true })

module.exports = Post;