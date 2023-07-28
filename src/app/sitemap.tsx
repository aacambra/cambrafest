import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cambrafest.pt/',
      lastModified: new Date(),
    },
    {
      url: 'https://cambrafest.pt/bilhetes',
      lastModified: new Date(),
    },
    {
      url: 'https://cambrafest.pt/faq',
      lastModified: new Date(),
    },
    {
      url: 'https://cambrafest.pt/info',
      lastModified: new Date(),
    },
    {
      url: 'https://cambrafest.pt/TERMOS E CONDIÇÕES GERAIS DE ENTRADA.pdf',
      lastModified: new Date(),
    },
  ]
}
