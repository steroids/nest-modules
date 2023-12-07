import {INotifierSmscVoiceType} from './INotifierSmscVoiceType';
import {INotifierPushOptions} from './INotifierPushOptions';

export interface INotifierSendOptions {
    //[NotifierProviderType.MAIL]?: boolean | INotifierMailOptions,
    mail?: INotifierMailOptions,
    sms?: INotifierSmsOptions,
    push?: INotifierPushOptions,
    call?: INotifierCallOptions,
    voice?: INotifierVoiceMessageOptions,
}

// Providers

export interface INotifierProviderOptions {
    /**
     * it's not a type! Example:
     * @see MailProvider.name
     */
    providerName?: string,
}

interface INotifierEmailAttachmentLikeObject {
    path: string;
}

export interface INotifierMailAttachment {
    filename: string;
    content?: any;
    path?: string;
    contentType?: string;
}

export interface INotifierMailOptions extends INotifierProviderOptions {
    to: string | Array<string>;
    from?: string,
    subject?: string;
    text?: string | Buffer | INotifierEmailAttachmentLikeObject;
    html?: string | Buffer;
    attachments?: INotifierMailAttachment[],
}

export interface INotifierSmsOptions extends INotifierProviderOptions {
    phone: string,
    message?: string,
    sender?: string,
}

export interface INotifierCallOptions extends INotifierProviderOptions {
    phone: string[],
}

export interface INotifierVoiceMessageOptions extends INotifierProviderOptions {
    phone: string,
    message: string,
    sender?: string,
    voice?: INotifierSmscVoiceType,
}
