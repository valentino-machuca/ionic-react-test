import User from "./user";

class Movement {

    public id: number;
    public monto: number;
    public isPay: boolean;
    public date: string;
    public senderId: number;
    public receiverId: number;
    public Sender: User;
    public Receiver: User;


    constructor(id: number, monto: number, isPay: boolean, date: string, senderId: number, receiverId: number, Sender: User, Receiver: User) {
        this.id = id;
        this.monto = monto;
        this.isPay = isPay;
        this.date = date;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.Sender = Sender;
        this.Receiver = Receiver;
    }
}

export default Movement;