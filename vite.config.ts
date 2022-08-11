import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const aliasPaths = [];

const aliasMapped = [
  { alias: "@", path: "src" },
  { alias: "@types", path: "src/types" },
  { alias: "@components", path: "src/components" },
  { alias: "@context", path: "src/context" },
  { alias: "@utils", path: "src/utils" },
  { alias: "@hooks", path: "src/hooks" },
  { alias: "@http", path: "src/http" },
  { alias: "@pages", path: "src/pages" },
  { alias: "@styles", path: "src/styles" },
];

aliasMapped.forEach((element) =>
  aliasPaths.push({
    find: element.alias,
    replacement: resolve(__dirname, element.path),
  })
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasPaths,
  },
});
