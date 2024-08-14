import { ContextDto } from '@steroidsjs/nest/usecases/dtos/ContextDto';
import { IUserRegistrationDto } from '../dtos/IUserRegistrationDto';
import { UserModel } from '../models/UserModel';

export const IUserRegistrationUseCase = 'IUserRegistrationUseCase';

export interface IUserRegistrationUseCase {
    handle: (dto: IUserRegistrationDto, context?: ContextDto) => Promise<UserModel>,
}
