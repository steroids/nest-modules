/**
 * Пользователь системы
 */
export class UserModel {
    id: number;

    phone: string;

    email: string;

    passwordHash: string;

    authRoles: any;

    authRolesIds: number[];
}
