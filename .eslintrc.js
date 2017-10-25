module.exports = {
 root: true,
 parser: 'babel-eslint',
 parserOptions: {
   sourceType: 'module'
 },
 env: {
   browser: true,
 },
 // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
 extends: 'standard',
 // add your custom rules here
 'rules': {
   "indent": [
     "error",
     2
   ],
   // allow paren-less arrow functions
   'arrow-parens': 0,
   // allow async-await
   'generator-star-spacing': 0,
   // 允许在空行使用空白符
   'no-trailing-spaces': ["error", { "skipBlankLines": true }],
   // allow debugger during development
   'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
 }
}
