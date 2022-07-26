import { Subject } from "rxjs";

import { AuthData } from "src/models/auth-data.model";
import { User } from "src/models/user.model"



export class AuthService {
    authChange = new Subject<boolean>();
    private user!: User | null;
    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        }
        this.authChange.next(true);
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        }
        this.authChange.next(true);
    }

    logout(){
        this.user = null;
        this.authChange.next(false);
    }

    getUser(){
        //makes sure we dont change the originale user object elsewhere in the code
        return {... this.user };
    }

    isAuth(){
        return this.user != null;
    }
}