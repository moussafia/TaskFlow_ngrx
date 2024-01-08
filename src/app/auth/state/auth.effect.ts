import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../auth.service";
import { AuthApiAction, AuthPageAction } from "./action";
import { catchError, concatMap, map, of } from "rxjs";

@Injectable()
export class AuthEffect{
constructor(private action$: Actions, private authService:AuthService){}
authUser$ = createEffect(()=>{
    return this.action$.pipe(
        ofType(AuthPageAction.logInUser),
        concatMap(action=>
            this.authService.signIn(action.email, action.password)
            .pipe(map(user => {
                return AuthApiAction.logInUserSuccess({user})}),
            catchError(error=> of(AuthApiAction.logInUserFailure({error})))
            ))   
    )
});
}