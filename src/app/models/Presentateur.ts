/**
 * interface representant un presentateur
 */
export default interface Presentateur {
    /**
     * id du presentateur
     */
    id: number;
    /**
     * nom du presentateur
     */
    name: string;
    /**
     * featured du presentateur
     */
    featured: boolean;
    /**
     * societe du presentateur
     */
    company: string;
    /**
     * logo de la societe du presentateur
     */
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
