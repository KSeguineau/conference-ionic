export default interface Presentateur {
    id: number;
    name: string;
    featured: boolean;
    company: string;
    companyLogo: string;
    country: string;
    photoUrl: string;
    shortBio: string;
    bio: string;
    tags: string[];
    badges: any[];
    socials: Social[];
}

interface Social {
    icon: string;
    name: string;
    link: string;
}
