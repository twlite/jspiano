const piano = require("./index.js");
const Octave = require("./Octave.js");
const fs = require("fs");
const { EventEmitter } = require("events");

class Piano extends EventEmitter {

    /**
     * @typedef {"C0"|"C1"|"C2"|"C3"|"C4"|"C5"|"C6"|"C7"} OctaveKey
     */

    /**
     * @typedef {"C"|"C#"|"D"|"D#"|"E"|"F"|"F#"|"G"|"G#"|"A"|"A#"|"B"} Note
     */

    /**
     * Creates piano
     * @param {OctaveKey|OctaveKey[]} octave 
     */
    constructor(octave = "C0") {
        super();

        /**
         * Piano notes
         * @type {Octave[]}
         */
        this.notes = [];

        this._createOctave(octave);
    }

    /**
     * @private
     * @param {OctaveKey|OctaveKey[]} octavekey 
     */
    _createOctave(octavekey) {
        if (!octavekey) throw new Error("Invalid Octave Key");
        
        if (!Array.isArray(octavekey)) {
            let freq;

            switch(octavekey) {
                case "C0":
                    freq = 27.5;
                    break;
                case "C1":
                    freq = 55;
                    break;
                case "C2":
                    freq = 110;
                    break;
                case "C3":
                    freq = 220;
                    break;
                case "C4":
                    freq = 440;
                    break;
                case "C5":
                    freq = 880;
                    break;
                case "C6":
                    freq = 1760;
                    break;
                case "C7":
                    freq = 3520;
                    break;
                default:
                    throw new Error(`Octave key must be one of ${Octave.octaves.map(m => `"${m}"`).join(", ")} but received "${octavekey}"!`);
            }

            const oct = new Octave(freq);
            this.notes.push({
                octave: octavekey,
                notes: oct
            });

        } else if (Array.isArray(octavekey) && octavekey.every(i => typeof i === "string" && Octave.octaves.includes(i))) {
            octavekey.forEach(octavekey => this._createOctave(octavekey));
        } else {
            throw new Error("Invalid octave key!");
        }
    }

    /**
     * Press piano note
     * @param {Note} note Piano note
     * @param {OctaveKey} octave Octave
     * @param {?number} [duration] Duration
     * @returns {boolean}
     */
    press(note, octave, duration = 1000) {
        if (!this.notes.some(x => x.notes.toJSON()[note])) throw new Error(`Invalid note ${note}!`);
        if (!this.notes.some(x => x.octave === octave)) throw new Error("Invalid octave!");
        
        const o = this.notes.find(x => x.octave === octave);
        const c = o.notes.toArray().find(x => x.note === note);

        this.emit("press", { note: note, octave: octave, duration: duration || 1000, frequency: c.frequency, time: Date.now() });

        return piano.pressNote(c.frequency, duration);
    }

    /**
     * Plays from sheet file
     * @param {string} path Sheet file path
     */
    playSheet(path) {
        if (!fs.existsSync(path)) throw new Error(`Could not locate sheet file!`);
        const data = fs.readFileSync(path, "utf-8");
        const sheet = JSON.parse(data);

        if (!Array.isArray(sheet)) throw new Error(`Invalid sheet file!`);

        if (!sheet.every(x => x.note && x.octave)) throw new Error("Malformed sheet file!");

        sheet.forEach(note => {
            this.press(note.note, note.octave, note.duration);
        });
    }

}

module.exports = Piano;