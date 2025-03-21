export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended"
  ],
  overrides: [
    {
      "files": ["*.vue", "**/*.vue"],
      "customSyntax": "postcss-html"
    }
  ]
}
