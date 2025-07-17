// serviceController.js
const { Service: ServiceModel } = require("../models/Service")

const serviceController = {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }

            const response = await ServiceModel.create(service) // create cria registros la no banco
            // mongoose rem varios metodos prontos como create, find para fazer operações de dados

            res.status(201).json({response, msg: "Serviço criado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find() // find pega todos os registros de uma determinada collection

            res.json(services) // faz o envio para o front

        } catch (error) {
            console.log(error)
        }
    },
    get: async(req, res) => {
        try {
            // para trazer o id para a requisição, quando é um get precisa fazer pela URL, parâmetro URL consegue ser lido com o verbo de requisição get, ele fica no objeto => params 
            const id = req.params.id
            const service = await ServiceModel.findById(id)

            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }

            res.json(service)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req, res) => {
        try {

            const id = req.params.id 
            const service = await ServiceModel.findById(id)

            if(!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id)

            res.status(200).json({deletedService, msg: "Serviço excluído com sucesso"})

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const id = req.params.id;

        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        }

        const updatedService = await ServiceModel.findByIdAndUpdate(id, service)

        if(!updatedService) {
            res.status(404).json({ msg: "Serviço não encontrado" });
            return;
        }

        res.status(200).json({service, msg: "Serviço atualizado com sucesso."})


    }


} 

module.exports = serviceController

