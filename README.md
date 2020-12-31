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
        "duration": 1000
    },
    {
        "note": "D",
        "octave": "C4",
        "duration": 1000
    },
    {
        "note": "E",
        "octave": "C4",
        "duration": 1000
    },
    {
        "note": "F",
        "octave": "C4",
        "duration": 1000
    },
    {
        "note": "G",
        "octave": "C4",
        "duration": 1000
    },
    {
        "note": "A",
        "octave": "C4",
        "duration": 1000
    },
    {
        "note": "B",
        "octave": "C4",
        "duration": 1000
    },
    {
        "note": "C",
        "octave": "C5",
        "duration": 1000
    }
]
```

## Load Sheets

```js
const { Piano } = require("jspiano");
const piano = new Piano(["C4", "C5"]);

piano.playSheet("./mysheet.json");
```

# Octaves
Available from `C0` to `C7`.

# Events
## press
Emitted when a note is pressed! Returns object with `note`, `octave`, `frequency`, `duration` and `time`.

```js
piano.on("press", ({ note, duration }) => console.log(note, duration));
```

# Preview
[![video](https://i.imgur.com/OCe3b4O.png)](https://i.imgur.com/OCe3b4O.mp4 "Preview - Click to Watch!")

# Join my discord
[![](https://i.imgur.com/f6hNUfc.png)](https://discord.gg/2SUybzb)