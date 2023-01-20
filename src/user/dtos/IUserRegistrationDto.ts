export interface IUserRegistrationDto {
    login: string;

    email: string;

    phone: string;

    password: string;

    authRolesIds: number[];
}
