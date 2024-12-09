import "dotenv/config";
import express from "express";
import livrosRoutes from "./routes/livrosRoutes.js";
import authenticate from "./database/connection.js";
import verificarAdm from "./middlewares/adminMiddleware.js";

authenticate();

const servidor = express();

servidor.use(express.json());

servidor.use(livrosRoutes);

servidor.get("/admin", verificarAdm, (req, res) => {
  res.json({
    mensagem: "Acesso administrativo.",
  });
});

servidor.listen(3000, () => {
  console.log("Servidor em execução");
});

// REST (Paradigma) -> Transferência de Estado Representacional
// API -> Interface de Programação de Aplicativos
// API -> Um canal para gerenciar dados
// API -> (GET, POST, PUT, DELETE) Formato JSON
// RESTful - API REST
