import {UserModel} from '../models/UserModel';
import {IUserRegistrationDto} from '../dtos/IUserRegistrationDto';

export const IUserService = 'IUserService';

export interface IUserService {
    findByLogin(login: string): Promise<UserModel>,
    registration(dto: IUserRegistrationDto): Promise<UserModel>,
    createQuery(): any, // TODO
    findById(id): any, // TODO
    search(dto, context, UserSchema): any, // TODO
}
