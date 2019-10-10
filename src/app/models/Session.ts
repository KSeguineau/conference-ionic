import Presentateur from "./Presentateur";

export default interface Session {
    id: number;
    title: string;
    titleMobile: string;
    image: string;
    description: string;
    type: string;
    track: Track;
    category: string;
    language: string;
    tags: string[];
    complexity: string;
    speakers: number[];
    presentateurs: Presentateur[];
}


interface Track {
    title: string;
}
