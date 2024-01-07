import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";

export class JwtAuthenticationInterceptor implements HttpInterceptor{
    constructor(private authService:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLogIn= this.authService.isLogIn;
        const isToServer = req.url.startsWith(environment.host);
        if(isLogIn && isToServer){
            req = req.clone({
                setHeaders: {Authorization: `Bearer ${this.authService.jwt}`}
            })
        }
    
        return next.handle(req);
    }
    
}