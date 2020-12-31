const { Piano, Sheets } = require("../index");
const piano = new Piano(["C4", "C5"]);

piano.on("press", ({ note, duration }) => console.log(note, duration));

piano.playSheet(Sheets.get("octavereplay"));