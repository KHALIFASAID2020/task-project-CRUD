export class Login {
    email: string;
    password: string;
    role: string;

    constructor(email: string, password: string, role: string) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

export class LoginResponse{
    userId: string;
    token: string;


    constructor(userId: string, token: string, role: string) {
        this.userId = userId;
        this.token = token;
    }
}

