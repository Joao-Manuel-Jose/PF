/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '',
          pathname: '**',
          
        },
      ],
      domains: ['localhost'],
    },
  }


