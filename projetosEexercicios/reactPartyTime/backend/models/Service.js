
const mongoose = require("mongoose");

const { Schema } = mongoose; // basicamente o esqueleto do model. model faz os metodos para fazer o CRUD

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: String,
    
  },
  { timestamps: true } // salva a data de criação do registro e também a data de atualização
);

const Service = mongoose.model("Service", serviceSchema); // cria o model

module.exports = {
  Service,
  serviceSchema,
};


