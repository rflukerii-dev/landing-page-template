import { IconType } from "react-icons";

export const siteDetails = {
    siteName: '',
    siteUrl: '',
    siteLogo: null as IconType | null,
    // siteLogo: `${process.env.BASE_PATH || ''}/images/logo.png`, // or use a string for the logo e.g. "TechStartup"
    metadata: { title: '', description: '' },
    language: 'en-us',
    locale: 'en-US',
    googleAnalyticsId: '',
}