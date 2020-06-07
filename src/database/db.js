// importar a dependendia do sqlite3
// o método verbose() permite ver mensagens no terminal
const sqlite3 = require("sqlite3").verbose()
// criar o objeto que irá fazer operações no banco de dados
// iniciando um objeto ("db") a partir de um constructor ou uma classe
// utilizar o objeto de danco de dados para nossas operações
const db = new sqlite3.Database("./src/database/database.db")

// exporta o objeto db
module.exports = db

// o serialize vai rodar uma sequência de código
// db.serialize(() => {
//     // com comandos sql eu vou:
//     // 1. criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         name TEXT,
//     //         image TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)
//     // 2. inserir dados na tabela
//     // const query = `
//     //     INSERT INTO places (
//     //         name,
//     //         image,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `
//     // const values = [
//     //     "Papersider",
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Nº 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]
//     // function afterInserData(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//         // o this referencia a resposta que o run está trazendo.
//     //     console.log(this)
//     // }
//     // se você escrever uma função com a referência () você imediatamente executa ela.

//     // para não inserir mais dados na tabela após criá-la, comente a linha abaixo:
//     // db.run(query, values, afterInserData)

//     // 3. consultar os dados da tabela
//     // rows - é um tipo de objeto que é um array. Sao os registros da nossa tabela
//     // db.all(`SELECT name FROM places`, function(err, rows) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão seus registros:")
//     //     console.log(rows)
//     // })
//     // 4. deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })
// })

