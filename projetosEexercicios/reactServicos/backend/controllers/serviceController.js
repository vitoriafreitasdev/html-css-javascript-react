const {Service: ServiceModel} = require("../models/Services.js")
//req.json
const serviceController = {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }

            const response = ServiceModel.create(service)

            res.status(201).json({response, msg: "Serviço criado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find()

            res.json(services)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id 
            const service = await ServiceModel.findById(id)

            if(!service) {
                res.status(404).json({msg: "Serviço não encontrado!"})
                return
            }
            res.json(service)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id 
            const service = await ServiceModel.findById(id)

            if(!service) {
                res.status(404).json({msg: "Serviço não encontrado!"})
                return
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id)

            res.status(200).json({deletedService, msg: "Serviço excluido com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const id = req.params.id 
        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }
        const updateService = await ServiceModel.findByIdAndUpdate(id, service)

        if(!updateService) {
            res.status(404).json({msg: "Serviço não encontrado"})
            return 
        }
        res.status(200).json({service, msg: "Serviço atualizado com sucesso!"})
    }
}

module.exports = serviceController