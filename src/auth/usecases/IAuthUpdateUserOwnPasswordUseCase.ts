import { ContextDto } from '@steroidsjs/nest/usecases/dtos/ContextDto';
import { IAuthUpdateUserOwnPasswordUseCaseDto } from '../dtos/IAuthUpdateUserOwnPasswordUseCaseDto';

export const IAuthUpdateUserOwnPasswordUseCase = 'IAuthUpdateUserOwnPasswordUseCase';

export interface IAuthUpdateUserOwnPasswordUseCase {
    handle: (dto: IAuthUpdateUserOwnPasswordUseCaseDto, context: ContextDto) => Promise<void>,
}
