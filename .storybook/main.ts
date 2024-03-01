import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*..mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          modules: {
            mode: "local",
            auto: true,
            localIdentName: "[name]__[local]___[hash:base64:5]",
            exportGlobals: true,
          },
        },
      },
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-mock",
    "@storybook/addon-postcss",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
