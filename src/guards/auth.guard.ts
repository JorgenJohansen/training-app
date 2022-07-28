import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/services/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(protected authService: AuthService, protected router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // return this.authService.isAuth() ? true : this.router.navigate(['/login']);
        return true;
    }

}