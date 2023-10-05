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

livrosRouter.put("/", (req, res) => {
  const livro = {
    id: req.body.id,
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    autor: req.body.autor,
  };

  try {
    const index = livros.findIndex((e) => {
      return e.id === livro.id
    });
  
    livros[index] = livro;

  } catch (error) {
    res.status(400).json(error)
  }

  res.status(200).json(livro);
})

livrosRouter.delete("/", (req, res) => {
  id = req.body.id

  try {

    const index = livros.findIndex((e) => {
      return e.id === id
    })
  
    livros.delete(index)
  } catch (error) {
    res.status(400).json(error)
  }

  res.status(200).json('Livro deletado');
})


const app = express();
app.use(express.json())
app.use(cors())
app.use("/livros", livrosRouter);
app.listen(3000);
