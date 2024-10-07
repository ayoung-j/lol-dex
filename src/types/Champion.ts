export interface Champion {
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    image: {
        full: string;
    };

    tags: string[];
    info: { attack: number; defense: number; magic: number; difficulty: number };
}
