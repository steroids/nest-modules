import {INotifierSendOptions} from '../interfaces/INotifierSendOptions';

export const INotifierService = 'INotifierService';

export interface INotifierService {
    send(options: INotifierSendOptions): Promise<{
        sms?: any,
        call?: any,
        mail?: any,
        push?: any,
        voice?: any,
        messenger?: any,
        sendRequestId: number,
    }>
}
