import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
    class User extends Model{}
    
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'User',
        timestamps: true,
    })
}