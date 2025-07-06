import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      display: "flex",
      flex: 1,
      
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
