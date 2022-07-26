import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData } from "src/models/auth-data.model";
import { User } from "src/models/user.model"


@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private user!: User | null;

    constructor(private router: Router){

    }

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        }
        this.authSucess();
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        }
        this.authSucess();
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

    private authSucess(): void{
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}