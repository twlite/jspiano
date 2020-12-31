# Piano
Simple Node.js Piano

# Installing

```sh
$ npm i jspiano
```

# Example

```js
const { Piano } = require("jspiano");
const piano = new Piano("C4"); // load piano with octave C4

piano.press("C#", "C4", 1000); // press C# of octave C4 for 1 second
```

# Sheets
## Sheet format
`mysheet.json`

```json
[
    {
        "note": "C",
        "octave": "C4",
        "duration": 2000
    }
]
```

## Load Sheets

```js
const { Piano } = require("jspiano");
const piano = new Piano("C4");

piano.playSheet("./mysheet.json");
```

# Octaves
Available from `C0` to `C7`.

# Preview
[![video](https://i.imgur.com/OCe3b4O.png)](https://i.imgur.com/OCe3b4O.mp4 "Preview - Click to Watch!")

# Join my discord
[![](https://i.imgur.com/f6hNUfc.png)](https://discord.gg/2SUybzb)