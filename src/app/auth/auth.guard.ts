import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUser, Role } from '../dto/auth';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { getUserAuthSucces } from './state';

@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {
  private _role?:string[];
  private readonly _roleEnum = Role
  constructor(private store: Store<AuthUser>,
    private authService: AuthService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.checkLogIn();
  }

  checkLogIn(): boolean{
    this.store.select(getUserAuthSucces).subscribe(data=>{
      this._role = data.roles
    })
    console.log("test in guard "+this.authService.tokenDecoded());
      if(this.authService.isLogIn && this._role?.includes(this._roleEnum.MANAGER.toString())){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }

  
}
