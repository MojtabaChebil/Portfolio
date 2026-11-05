/** @type {import('next').NextConfig} */
const nextConfig = {
  // Page /services tna7at: ay 7ad 3andou el lien el 9dim yemchi lel home
  async redirects() {
    return [{ source: "/services", destination: "/", permanent: true }];
  },
};

export default nextConfig;
