const Users = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

const userController = {
    getUserInfo: async (req, res)=> {
        try {
            const user = await Users.findById(req.user.id).select('-password')
            res.json(user)
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },

    getAllUser: async (req, res)=> {
        try {
            const users = await Users.find().select('-password')
            res.json(users)
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },

    updateUser: async (req, res) => {
        try {
            const {username, avatar} = req.body
            await Users.findOneAndUpdate({_id: req.user.id}, {username, avatar})
            res.json("Cập nhật thông tin thành công")
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },

    updateUserPermission: async (req, res) => {
        try {
            const {isAdmin} = req.body
            await Users.findOneAndUpdate({_id: req.params.id}, {isAdmin})
            res.json("Cập nhật thông tin thành công")
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },

    deleteUser: async (req, res) => {
        try {
            await Users.findByIdAndDelete(req.params.id)

            res.json({msg: "Xóa tài khoản thành công"})
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    },




}

module.exports = userController