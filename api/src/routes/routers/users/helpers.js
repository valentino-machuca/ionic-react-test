const { User } = require('../../../db');

const getUserByPk = async (user_id) => { // Obtener usuario por id
    
    try {
        const responsedb = await User.findByPk(user_id)
        return responsedb;
    } catch (e) {
        throw new Error(e);
    }
}

const getAllUsers = async () => { // Obtener usuarios
    
    try {
        const responsedb = await User.findAll()
        return responsedb;
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = { getUserByPk, getAllUsers };