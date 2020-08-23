const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const links = require ('./data')

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/about", function (req, res) {
    const about = {
        logo_url: "https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_400x400.jpg",
        name: "Rocketseat",
        role: "Cursos de Programação",
        description: "As melhores tecnologias de programação direto ao ponto certo.",
        links: [
            { name:"Github", url: "https://github.com/Rocketseat"},
            { name:"Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
            { name:"Facebook", url: "https://www.facebook.com/rocketseat/"},
             

        ]
    }


    return res.render("about", { about, links })
}) 

server.get("/courses", function (req, res) {
    return res.render("courses", { items: links })
})

server.get("/courses/:id", function (req, res){
    const id = req.params.id;

    const course = links.find(function(course) {  
        return course.id == id 
            
    })

    if (!course) {
        return res.render("not-found")
    }

    return res.render("course", { item: course })
})

server.use(function (req, res) {
    res.status(404).render("not-found")  // renderizar a pag 404
})

server.listen(5000, function() {  // server escuta a porta 5000, e executa a função
    console.log("server is running")
})
