const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    class Movement extends Model{}
    
    Movement.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        monto: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        isPay: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        senderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        receiverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Movement',
        timestamps: true,
    })
}