import {INotifierSendOptions} from '../interfaces/INotifierSendOptions';

export const INotifierService = 'INotifierService';

export interface INotifierService {
    send(options: INotifierSendOptions)
}
