import { createAction, props } from "@ngrx/store";
import { AuthFailure, AuthUser } from "src/app/dto/auth";

export const logInUserSuccess = createAction('[Auth api] log in user success',
props<{user: AuthUser}>());
export const logInUserFailure = createAction('[Auth api] log in user failure',
props<{error: AuthFailure}>());