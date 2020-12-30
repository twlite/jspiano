# Piano
Simple Node.js Piano

# Installing

```sh
$ npm i jspiano
```

# Example

```js
const { Piano, Sheets } = require("jspiano");
const piano = new Piano("C4");

piano.playSheet(Sheets.get("happybirthday"));
```