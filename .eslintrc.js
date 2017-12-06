module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "react-native"
  ],
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  },
  "extends" : [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base"
  ],
  "rules" : {
    "arrow-body-style" : 'warn',
    "class-methods-use-this": 0,
    "extensions": 0,
    "no-use-before-define":0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies":0,
    "import/no-unresolved":0,
    "comma-spacing":0
  }
};