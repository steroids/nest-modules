import {INotifierSmscVoiceType} from './INotifierSmscVoiceType';

export interface INotifierBaseOptions {
    message?: string,
    subject?: string,
    language?: string,
}

export interface INotifierSendOptions extends INotifierBaseOptions {
    //[NotifierProviderType.MAIL]?: boolean | INotifierMailOptions,
    mail?: boolean | INotifierMailOptions,
    sms?: boolean | INotifierSmsOptions,
    push?: boolean | INotifierPushOptions,
    store?: boolean | INotifierStoreOptions,
    call?: boolean | INotifierCallOptions,
    voice?: boolean | INotifierVoiceMessageOptions,
}

// Providers

export interface INotifierProviderOptions {
    /**
     * it's not a type! Example:
     * @see MailProvider.name
     */
    name?: string,
}

export interface INotifierMailOptions extends INotifierProviderOptions {
    toEmail: string,
    message?: string,
    fromEmail?: string,
    attachments?: INotifierMailAttachment[],
    subject?: string,
}

export interface INotifierMailAttachment {
    fileName?: string,
    contentType?: string,
    content?: string,
    path: string
}

export interface INotifierSmsOptions extends INotifierProviderOptions {
    phone: string,
    message?: string,
    sender?: string,
}

export interface INotifierCallOptions extends INotifierProviderOptions {
    phone: string,
}

export interface INotifierVoiceMessageOptions extends INotifierProviderOptions {
    phone: string,
    message: string,
    sender?: string,
    voice?: INotifierSmscVoiceType,
}

export interface INotifierPushOptions extends INotifierProviderOptions {
    data: Record<string, unknown>,
    tokens: string[],
    notification: {
        title: string,
        body: string,
    },
}

export interface INotifierStoreOptions extends INotifierProviderOptions {
    userId: number,
    message?: string,
    refId?: number,
    //templateName: string,
    //saveHandler?: (model: NotifierStoreMessageModel) => Promise<void>,
}
