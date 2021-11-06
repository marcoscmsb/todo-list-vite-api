let express = require("express")
let cors = require("cors")

let tarefas = [
    {
        descricao: "Tirar o lixo",
        data: new Date("2021-11-06"),
        conculida: true
    },
    {
        descricao: "Lavar louça",
        data: new Date("2021-11-08"),
        conculida: true
    },
    {
        descricao: "Limpar casa",
        data: new Date("2021-11-05"),
        conculida: true
    }
]

let api = express() // inicia a aplicação com express
api.use(express.json()) // autoriza requisição com o body em JSON
api.use(cors({
    origin: "http://localhost:8080"
})) 


api.get("/", function(req, res){
    res.json({ mensagem: "Olá mundo"})
})

api.post("/", function(req, res){
    console.log(req.body)
    res.json({ mensagem: `A mensagem recebida foi: ${req.body.mensagem}`})
})

api.get("/tarefas", function(req, res) {
    res.json(tarefas)
})

api.post("/tarefas", function(req, res){
    tarefas.push(req.body)
    res.json({ mensagem: "Adicionado como sucesso"})
})

api.listen(3000, function(){
    console.log("API rodando na porta 3000")
}) //liga o servidor na porta 3000

