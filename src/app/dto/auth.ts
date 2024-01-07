export interface AuthUser{
    access_token: string;
    refresh_token: string;
    id: number;
    firstName: string;
    LastName: string;
    email: string;
    roles: string[];
}
export interface AuthFailure{
    status: number,
    error: errorAuth,
    message: string,
}
export interface errorAuth{
        status: number,
        error: string,
        timestamp: string,
        message: string,
        path: string
}
export enum Role{
    MANAGER, USER
}