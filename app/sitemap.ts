import { MetadataRoute } from 'next'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const home = {
        url: 'https://simplifycrm.es/',
    }   

    return [home]
}