import { createAction, props } from "@ngrx/store";

export const logInUser = createAction('[Auth api] log in user',
props<{username:string, password:string}>());