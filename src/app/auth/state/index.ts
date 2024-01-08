import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";


const getUserFeatureState = createFeatureSelector<AuthState>('user');
export const getUserAuthSucces = createSelector(
    getUserFeatureState,
    state =>{
        return state.user;
    } 
)
export const getUserAuthFailure = createSelector(
    getUserFeatureState,
    state => state.error
)
