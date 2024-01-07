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
  private role?:string[];
  private readonly roleEnum = Role
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
      this.role = data.roles
    })
      if(this.authService.isLogIn && this.role?.includes(this.roleEnum.MANAGER.toString())){
          return true;
      }
      this.router.navigate(['/logIn']);
      return false;
  }

  
}
