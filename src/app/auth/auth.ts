export interface AuthUser{
    access_token: string;
    refresh_token: string;
    id: number;
    firstName: string;
    LastName: string;
    email: string;
    roles: string[];
}