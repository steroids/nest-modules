export const IAuthRevokeUserActiveLoginsUseCase = 'IAuthRevokeUserActiveLoginsUseCase';

export interface IAuthRevokeUserActiveLoginsUseCase {
    handle: (userId: number) => Promise<void>,
}
