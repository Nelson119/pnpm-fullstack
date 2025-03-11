import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser"; // ✅ 新增 Vue 解析器

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        HTMLButtonElement: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": ts,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y
    },
    settings: {
      react: {
        version: "19"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...(ts.configs.recommended.rules || {}),
      ...(react.configs.recommended.rules || {}),
      ...(reactHooks.configs.recommended.rules || {}),
      ...(jsxA11y.configs.recommended.rules || {}),
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-undef": "off",
      "react/no-unknown-property": "off"
    }
  },

  // ✅ 針對 Vue 檔案的額外設定
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser, // ✅ Vue 檔案必須用 vue-eslint-parser
      sourceType: "module",
      parserOptions: {
        parser: tsParser // ✅ 內部的 `<script setup>` 還是用 TypeScript 解析
      }
    },
    plugins: {
      vue
    },
    rules: {
      ...(vue.configs.base?.rules || {}),
      ...(vue.configs["flat/essential"]?.rules || {}),
      "vue/multi-word-component-names": "off",
      "vue/comment-directive": "off"
    }
  }
];
