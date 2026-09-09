import organizeImports from "prettier-plugin-organize-imports";

/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [organizeImports],
};

export default config;
