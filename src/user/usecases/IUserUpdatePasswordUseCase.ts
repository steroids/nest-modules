import { ContextDto } from '@steroidsjs/nest/usecases/dtos/ContextDto';

export const IUserUpdatePasswordUseCase = 'IUserUpdatePasswordUseCase';

export interface IUserUpdatePasswordUseCase {
    handle: (userId: number, passwordHash: string, context: ContextDto) => Promise<void>,
}
