import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sgp1.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      }
    ],
  },
};

export default withNextIntl(config);
