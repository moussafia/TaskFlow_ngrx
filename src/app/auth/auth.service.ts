import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthUser } from '../dto/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signIn(username:string, password:string):Observable<AuthUser>{
    return this.http.post<AuthUser>(`${environment.host}auth/logIn`,
    {username, password}).pipe(
      tap(r=>console.log(r))
    );
  }
}
