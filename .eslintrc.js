module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "axios": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "semi": 1
    }
};