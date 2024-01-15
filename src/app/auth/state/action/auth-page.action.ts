import { createAction, props } from "@ngrx/store";

export const logInUser = createAction('[Auth page] log in user',
props<{email:string, password:string}>());