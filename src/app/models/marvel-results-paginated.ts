export class MarvelResultsPaginated {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}

export class Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: MarvelHero[];
}

export class MarvelHero {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics;
    series: Comics;
    stories: Stories;
    events: Comics;
    urls: URL[];
}

export class Comics {
    available: number;
    collectionURI: string;
    items: ComicsItem[];
    returned: number;
}

export class ComicsItem {
    resourceURI: string;
    name: string;
}

export class Stories {
    available: number;
    collectionURI: string;
    items: StoriesItem[];
    returned: number;
}

export class StoriesItem {
    resourceURI: string;
    name: string;
    type: ItemType;
}

export enum ItemType {
    Cover = "cover",
    Empty = "",
    InteriorStory = "interiorStory",
}

export class Thumbnail {
    path: string;
    extension: Extension;
}

export enum Extension {
    GIF = "gif",
    Jpg = "jpg",
}

export class URL {
    type: URLType;
    url: string;
}

export enum URLType {
    Comiclink = "comiclink",
    Detail = "detail",
    Wiki = "wiki",
}
