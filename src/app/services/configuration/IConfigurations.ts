export interface IVideoVO {
    youTubeIframeSrc: string;
}

export interface IAudioVO {
    soundCloudIframeSrc: string;
}

export interface IReleaseVO {
    href: string;
    iconUrl: string;
    headerTextId: string;
    textId: string;
}

export interface IAboutVO {
    artistIconUrl: string;
}

export interface IHeaderIconVO {
    href: string;
    iconUrl: string;
}

export interface IContactVO {
    href: string;
    iconUrl: string;
    text: string;
}

export interface IPhotoVO {
    fullSizeUrl: string;
    previewUrl: string;
}

export interface ILocale {
    defaultLanguage: string;
    supportedLanguages: Array<string>;
}

export interface IConfigurationVO {
    locale: ILocale;
    about: IAboutVO;
    releases: Array<IReleaseVO>;
    audios: Array<IAudioVO>;
    videos: Array<IVideoVO>;
    headerIcons: Array<IHeaderIconVO>;
    photos: Array<IPhotoVO>;
    contacts: Array<IContactVO>;
}
