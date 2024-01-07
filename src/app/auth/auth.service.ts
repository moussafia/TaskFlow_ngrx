import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthUser } from '../dto/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly jwt_key="accessToken"
  constructor(private http: HttpClient) {}
  get jwt():string{
    return sessionStorage.getItem(AuthService.jwt_key) ?? '';
  }
  private set jwt(value:string){
    sessionStorage.setItem(AuthService.jwt_key, value);
  }
  get isLogIn():boolean{
    return !!this.jwt;
  }
  
  signIn(email:string, password:string):Observable<AuthUser>{
    console.log(`${email} and   ${password}`);
    return this.http.post<AuthUser>(`${environment.host}auth/logIn`,
    {email, password}).pipe(
      tap(data=>this.jwt = data.access_token)
    );
  }
}
