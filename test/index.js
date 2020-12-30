const { Piano, Sheets } = require("../index");
const piano = new Piano(["C4", "C5"]);

piano.playSheet(Sheets.get("happybirthday"));