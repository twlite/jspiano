const piano = require("./index");

// musical note frequency
const notes = [256.87, 288.33, 323.63, 342.88, 384.87, 432.00, 484.90, 513.74];

console.log("First");
for (const note of notes) {
    piano.pressNote(note, 1000);
}


console.log("\nSecond");
for (const note of notes.reverse()) {
    piano.pressNote(note, 1000);
}