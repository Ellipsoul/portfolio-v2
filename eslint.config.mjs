import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

/**
 * ESLint flat configuration for Next.js 16 with ESLint 9
 * 
 * This configuration:
 * - Uses the flat config format required by ESLint 9
 * - Includes Next.js, React, React Hooks, and TypeScript support
 * - Includes ignore patterns (migrated from .eslintignore)
 * - Applies to all JS/TS/TSX files in the project
 */
const eslintConfig = [
  // Base recommended JavaScript rules
  js.configs.recommended,
  
  // Global ignores (migrated from .eslintignore)
  {
    ignores: [
      "*.json",
      "*.webmanifest",
      "node_modules/**",
      ".next/**",
      ".vscode/**",
      "*.d.ts",
      "dist/**",
      "build/**",
      "coverage/**",
    ],
  },
  
  // Configuration for Node.js config files (CommonJS)
  {
    files: ["*.config.js", "*.config.mjs"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly",
        Buffer: "readonly",
        console: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off", // Allow require() in config files
    },
  },
  
  // Configuration for TypeScript/TSX files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        // DOM types
        SVGSVGElement: "readonly",
        SVGElement: "readonly",
        HTMLElement: "readonly",
        Element: "readonly",
        Document: "readonly",
        Window: "readonly",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      
      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      
      // TypeScript rules
      ...typescriptPlugin.configs.recommended.rules,
      
      // Custom rule overrides
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "@next/next/no-img-element": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-undef": "off", // TypeScript handles this
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  
  // Configuration for JavaScript/JSX files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      
      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      
      // Custom rule overrides
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "@next/next/no-img-element": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
