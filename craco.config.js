const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#132238",
              "@primary-color-hover": "#ffffff",
              "@primary-color-active": "#ffffff",
              "@icon-color-hover": "fade(@white, 75%)",
              "@text-color": "white",
              "@text-color-secondary": "#1890ff",
              "@heading-color": "white",
              "@pagination-item-bg-active": "#152740",
              "@pagination-item-link-bg": "#2C7BE5",
              "@layout-body-background": "#061325",
              "@layout-header-background": "#061325",
              "@component-background": "#0E1C2F",
              "@background-color-light": "#0E1C2F",
              "@table-bg": "#152740",
              "@link-color": "white",
              "@btn-default-bg": "#2C7BE5",
              "@disabled-color": "white",
              "@disabled-bg": "#6a6a6b",
              "@btn-disable-border": "#828282",
              "@border-color-base": "#949494",
              "@input-hover-border-color": "#2C7BE5",
              "@input-number-handler-hover-bg": "#2C7BE5",
              "@input-focus-border-color": "#57a8e9",
              "@item-hover-bg": "#808080",
              "@highlight-color": "white",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
