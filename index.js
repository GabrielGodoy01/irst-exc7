const express = require("express");
const uuid = require("uuid");
const cors = require('cors')


const livros = [];


const livrosRouter = express.Router();

livrosRouter.get("/", (req, res) => {
  res.json(livros);
});


livrosRouter.post("/", (req, res) => {
  const livro = {
    id: uuid.v4(),
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    autor: req.body.autor,
  };

  livros.push(livro);

  res.status(201).json(livro);
});


const app = express();
app.use(express.json())
app.use(cors())
app.use("/livros", livrosRouter);
app.listen(3000);
