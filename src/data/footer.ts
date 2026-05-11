import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "",
    quickLinks: [],
    email: '',
    telephone: '',
    socials: {
        github: 'https://github.com',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
    }
}