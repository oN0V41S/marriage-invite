import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Casamento Clarice e Ailton.',
    short_name: 'C & A - Casamento',
    description: 'Convite de casamento, confirme já sua presença!!',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [],
  }
}