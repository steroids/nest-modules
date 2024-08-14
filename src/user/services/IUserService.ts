import { CrudService } from '@steroidsjs/nest/usecases/services/CrudService';
import { SearchInputDto } from '@steroidsjs/nest/usecases/dtos/SearchInputDto';
import { IDeepPartial } from '@steroidsjs/nest/usecases/interfaces/IDeepPartial';
import { UserModel } from '../models/UserModel';

export const IUserService = 'IUserService';

export interface IUserService extends CrudService<UserModel, SearchInputDto, IDeepPartial<UserModel>> {
    findByLogin(login: string): Promise<UserModel>,
}
