import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
  images: {
    domains: ["sgp1.digitaloceanspaces.com"],
  },
};

export default withNextIntl(config);
