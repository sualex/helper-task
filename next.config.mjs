/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: {
      autoLabel: "dev-only",
      importMap: {
        "@mui/material": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/material", "styled"],
          },
        },
        "@mui/material/styles": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/material/styles", "styled"],
          },
        },
      },
    },
  },
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/elements',
      //   permanent: true,
      // },
    ]
  },
};

export default nextConfig;
