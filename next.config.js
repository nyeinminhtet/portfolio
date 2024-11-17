/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://nyeinminhtet.vercel.app/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
