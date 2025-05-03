import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.js core rules
  ...compat.extends("next/core-web-vitals"),

  // React rules
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:react-hooks/recommended"),
  ...compat.extends("plugin:jsx-a11y/recommended"),

  // Prettier (MUST come last to override formatting rules)
  ...compat.extends("plugin:prettier/recommended"),

  // Custom rule overrides
  {
    rules: {
      // React 17+ JSX transform
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // Allow .jsx and .tsx extensions
      "react/jsx-filename-extension": [
        "error",
        { "extensions": [".jsx", ".tsx"] }
      ],

      // Prettier config (optional but recommended)
      "prettier/prettier": [
        "error",
        {
          "semi": false,
          "singleQuote": true,
          "jsxSingleQuote": true,
          "tabWidth": 2,
          "printWidth": 80,
          "trailingComma": "es5"
        }
      ]
    },
    settings: {
      react: {
        version: "detect" // Auto-detects React version
      }
    }
  }
];