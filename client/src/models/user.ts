class User {

    public id: number;
    public name: string;
    public lastname: string;
    public email: string;
    public avatar: string;

    constructor(id: number, name: string, lastname: string, email: string, avatar: string) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.avatar = avatar;
    }
}

export default User;