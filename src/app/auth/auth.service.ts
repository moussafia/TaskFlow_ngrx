import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthUser, TokenDecoced } from '../dto/auth';
import { environment } from 'src/environments/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly _jwt_key="accessToken";
  private static readonly _jwtRefresh_key="refreshToken";
  constructor(private http: HttpClient) {}

  get jwt():string{
    return localStorage.getItem(AuthService._jwt_key) ?? '';
  }

  private set jwt(value:string){
    localStorage.setItem(AuthService._jwt_key, value);
  }

  get isLogIn():boolean{
    return !!this.jwt;
  }
  get refreshToken():string{
    return localStorage.getItem(AuthService._jwtRefresh_key) ?? ''
  }
  set refreshToken(value: string) {
    localStorage.setItem(AuthService._jwtRefresh_key, value);
  }
  tokenDecoded():TokenDecoced | null{
    try{
     return jwtDecode(this.jwt);

    }catch(Error){
      return null;
    }
  }
  
  signIn(email:string, password:string):Observable<AuthUser>{
    return this.http.post<AuthUser>(`${environment.host}auth/logIn`,
    {email, password}).pipe(
      tap(data=>{
        this.jwt = data.access_token;
        this.refreshToken = data.refresh_token
      })
    );
  }
}
