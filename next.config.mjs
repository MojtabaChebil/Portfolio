/** @type {import('next').NextConfig} */
const nextConfig = {
 
  async redirects() {
    return [{ source: "/services", destination: "/", permanent: true }];
  },
};

export default nextConfig;
