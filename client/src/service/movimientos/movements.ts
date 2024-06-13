
const getMovementsByUser = async (user_id: number) => {
    try {
        const response = await fetch(`https://ionic-react-test.onrender.com/movimientos/${user_id}`);
        const data = await response.json();
        return data;
    } catch (e: any) {
        throw new Error(e);
    }
};

export {
    getMovementsByUser,
};