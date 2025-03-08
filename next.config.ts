import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "variables.module" as *;`, // Injeção global
  },
};

export default nextConfig;
