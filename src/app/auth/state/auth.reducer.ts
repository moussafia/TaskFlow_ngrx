import { createReducer, on } from "@ngrx/store";
import { AuthFailure, AuthUser } from "src/app/dto/auth";
import { AuthApiAction } from "./action";

export interface AuthState{
    user: AuthUser
    error: AuthFailure
}
const InitialAuthState : AuthState = {
    user: {} as AuthUser,
    error: {} as AuthFailure
}
export const userReducer = createReducer<AuthState>(
    InitialAuthState,
    on(AuthApiAction.logInUserSuccess,(state, action)=>{
        return {
            ...state,
            user:action.user,
            error: {} as AuthFailure
        }
    }),
    on(AuthApiAction.logInUserFailure,(state,action)=>{
       return {
        ...state,
        user:{} as AuthUser,
        error: action.error
       }
    })
)