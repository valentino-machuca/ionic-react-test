import { Movement, User } from '../../../db.js';
import { Op } from 'sequelize';

const getMovementsByUserId = async (user_id) => { // Obtener movimientos en los que participa un usuario.
    try {
        const responsedb = await Movement.findAll({
            include: [ // Incluye la tabla Users para el usuario que recibe y para el que envia.
                {
                    model: User,
                    as: 'Sender',
                    attributes: ['id','name', 'lastname', 'avatar']
                },
                {
                    model: User,
                    as: 'Receiver',
                    attributes: ['id','name', 'lastname', 'avatar']
                }
            ],
            where: {
                [Op.or]:[ // WHERE receiverId = :user_id OR senderId = :user_id
                    {receiverId: user_id},
                    {senderId: user_id}
                ],
            },
            order: [
                ['date', 'desc']
            ]
        });

        return responsedb;
    } catch (e) {
        throw new Error(e)
    }
}

export { getMovementsByUserId };