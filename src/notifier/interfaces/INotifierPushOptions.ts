import {INotifierProviderOptions} from './INotifierSendOptions';

export interface INotifierPushOptions extends INotifierProviderOptions {
    tokens: string[],
    notification: {
        // The title of the notification.
        title: string,
        // The notification body
        body: string,
        // URL of an image to be displayed in the notification.
        imageUrl: string,
    },
    data?: Record<string, string>,
    // https://firebase.google.com/docs/reference/admin/node/firebase-admin.messaging.androidconfig.md?hl=en#androidconfig_interface
    android?: {
        collapseKey: string,
        data?: Record<string, string>,
        fcmOptions?: {
            analyticsLabel?: string;
        },
        notification: AndroidNotification,
        priority?: ('high' | 'normal');
        restrictedPackageName?: string;
        ttl?: number;
    },
    apns?: ApnsConfig;
    fcmOptions?: {
        analyticsLabel?: string;
    };
}

// https://firebase.google.com/docs/reference/admin/node/firebase-admin.messaging.androidnotification.md?hl=en#properties
interface AndroidNotification {
    body?: string,
    bodyLocArgs?: string[];
    bodyLocKey?: string;
    channelId?: string;
    clickAction?: string;
    color?: string;
    defaultLightSettings?: boolean;
    defaultSound?: boolean;
    defaultVibrateTimings?: boolean;
    eventTimestamp?: Date;
    icon?: string;
    imageUrl?: string;
    lightSettings?: {
        color: string;
        lightOffDurationMillis: number;
        lightOnDurationMillis: number;
    };
    localOnly?: boolean;
    notificationCount?: number;
    priority?: ('min' | 'low' | 'default' | 'high' | 'max');
    sound?: string;
    sticky?: boolean;
    tag?: string;
    ticker?: string;
    title?: string;
    titleLocArgs?: string[];
    titleLocKey?: string;
    vibrateTimingsMillis?: number[];
    visibility?: ('private' | 'public' | 'secret');
}

interface ApnsConfig {
    fcmOptions?: {
        analyticsLabel?: string;
        imageUrl?: string;
    };
    headers?: {
        [key: string]: string;
    };
    payload?: {
        aps: {
            alert?: string;
            badge?: number;
            category?: string;
            contentAvailable?: boolean;
            mutableContent?: boolean;
            sound?: string | {
                critical?: boolean;
                name: string;
                volume?: number;
            };
            threadId?: string;
        };
    };
}
