/** @type {import('next').NextConfig} */
const nextConfig = {
  reactRefresh: true,
  async redirects() {
    return [
      {
        source: '/bilhetes',
        destination: 'https://musicasemcapa.bol.pt/Comprar/Pesquisa?q=cambrafest',
        permanent: false,
      },
      {
        source: '/info',
        destination: 'https://linktr.ee/cambrafest',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
