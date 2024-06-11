
const getMovementsByUser = async (user_id: number) => {
    try {
        const response = await fetch(`http://localhost:8080/movimientos/${user_id}`);
        const data = await response.json();
        return data;
    } catch (e: any) {
        throw new Error(e);
    }
};

export {
    getMovementsByUser,
};