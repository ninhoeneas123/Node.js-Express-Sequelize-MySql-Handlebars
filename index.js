const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require("./models/Post.js")

//config 
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')

//Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
//routes
    app.get('/', (req,res) => {
        Post.findAll().then( (posts) => {
            res.render('home', {posts: posts})
            console.log(posts)
            console.log(JSON.stringify(posts))
        })
    })
    app.get('/cad',(req,res) => {
        res.render('form')
    })
    app.post('/add',(req,res) => {
        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then( () => { 
            res.redirect('/')
        }).catch( (erro) => {
            res.send("Houve um erro" + erro)
        })

    })
    app.get('/api', (req, res) => {
        const result = Post.findAll().then((posts) => {
         res.json(posts)
         console.log(posts.id)
        })
        return result;
      });
    app.get('/deletar/:id', (req, res) => {
        Post.destroy({where:{'id': req.params.id}}).then( () =>{
            res.render('delete')
        }).catch((erro) =>{
            res.send("Não foi possivel apagar sua postagem "+ erro)
        })
    })
app.listen(8081, () => {
    console.log("servidor rodando na porta 8081")
})