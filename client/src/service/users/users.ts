import User from '../../models/user';

const getUserById = async (user_id: number) => {
    try {
        const response = await fetch(`https://ionic-react-test.onrender.com/users/${user_id}`);
        const {id, name, lastname, email, avatar} = await response.json();
        return new User(id, name, lastname, email, avatar);
    } catch (e: any) {
        throw new Error(e);
    }
};

export {
    getUserById,
};