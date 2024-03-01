import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

// https://vitejs.dev/config/
export const getBaseConfig = ({ plugins = [], lib }) =>
  defineConfig({
    plugins: [react(), ...plugins],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    build: {
      lib,
      rollupOptions: {
        external: isExternal,
        output: {
          globals: {
            react: "React",
            tailwindcss: "tailwindcss",
          },
        },
      },
    },
  });
