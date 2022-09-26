const { Sequelize } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async CreateUser(req, res) {
        try {
            const { email, name } = req.body
                const user = await User.create({name, email})
                res.status(200).json({user})
        } catch (error) {
            res.status(400).json({error})
        }
    },
     async ListOneUser(req, res){
        try {
            const { id } = req.params
            const user = await User.findOne({where: {id}})
            if(user){
                res.status(200).json({user})
            } else {
                res.status(400).json({message: 'User not found'})
            }
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async ListUser(req, res){
        try {
            const user = await User.findAll()
            if(user){
                res.status(200).json({user})
            } else {
                res.status(400).json({message: 'User not found'})
            }
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async DeleteUser(req, res){
        try {
            const { id } = req.params
            const user = await User.findOne({where: {id}})
            if(user){
                const user = await User.destroy({where: {id}})
                res.status(200).json({user})
            } else {
                res.status(400).json({message: 'User not found'})
            }
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async UpdateUser(req, res){
        try {
            const { name, email } = req.body
            const { id } = req.params
            const user = await User.findOne({where: {id}})
            if(user){
                const user = await User.upsert({id: id, name: name, email: email})
                res.status(200).json({user})
            } else {
                res.status(400).json({message: 'User not found'})
            }
        } catch (error) {
            res.status(400).json({error})
        }
    }
}