const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")

// configurar pasta publica
server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

// utlizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da minha aplicação
// página inicial
server.get("/", (req, res) => {
    //inserindo uma variável pelo nunjucks
    return res.render("index.html", { title: "Um título" })
})

server.get("/create-point", (req, res) => {

    // req.query: Query strings da nossa url

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // console.log(req.query)
    // req.body: o corpo do nosso formulário
    // console.log(req.body)

    // inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    function afterInserData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        // o this referencia a resposta que o run está trazendo.
        console.log(this)
        return res.render("create-point.html", { saved: true })
    }
    // se você escrever uma função com a referência () você imediatamente executa ela.

    // para não inserir mais dados na tabela após criá-la, comente a linha abaixo:
    db.run(query, values, afterInserData)

})

server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        // pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }

    // pegar os dados do banco de dados
    // aspas simples nessa variável porque o sql entende isso como uma string e strings são captadas apenas com aspas simples.
    // LIKE %% signigica que ele busca qualquer valor antes e depois
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        // mostra o total de elementos
        const total = rows.length
        // mostrar a página html com os dados do banco de dados
        // quando um nome da propriedade é igual ao seu valor, você pode deixar apenas o nome sem valor
        return res.render("search-results.html", { places: rows, total: total })
    })
})

// ligar o servidor na porta 3000
server.listen(3000)