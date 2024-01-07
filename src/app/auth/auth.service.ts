import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser, SignIn } from './auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host:string="http://localhost:8080/api/v1/";
  constructor(private http: HttpClient) {}
  signIn(signIn:SignIn):Observable<AuthUser>{
    return this.http.post<AuthUser>(`${this.host}auth/logIn`,signIn);
  }
}
