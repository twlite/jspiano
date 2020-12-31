class Octave {

    constructor(node = 440) {

        // C
        this.C = node * Math.pow(2, -9 / 12);
        this.CS = node * Math.pow(2, -8 / 12);

        // D
        this.D = node * Math.pow(2, -7 / 12);
        this.DS = node * Math.pow(2, -6 / 12);

        // E
        this.E = node * Math.pow(2, -5 / 12);

        // F
        this.F = node * Math.pow(2, -4 / 12);
        this.FS = node * Math.pow(2, -3 / 12);

        // G
        this.G = node * Math.pow(2, -2 / 12);
        this.GS = node * Math.pow(2, -1 / 12);

        // A
        this.A = node;
        this.AS = node * Math.pow(2, 1 / 12);

        // B
        this.B = node * Math.pow(2, 2 / 12);
    }

    static get octaves() {
        return ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7"];
    }

    static get notes() {
        return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    }

    static get names() {
        return {
            "C": ["Sa", "Do", "C"],
            "C#": ["Sa#", "Do#", "C#"],

            "D": ["Re", "Re", "D"],
            "D#": ["Re#", "Re#", "D#"],

            "E": ["Ga", "Mi", "E"],

            "F": ["Ma", "Fa", "F"],
            "F#": ["Ma#", "Fa#", "F#"],

            "G": ["Pa", "Sol", "G"],
            "G#": ["Pa#", "Sol#", "G#"],

            "A": ["Dha", "La", "A"],
            "A#": ["Dha#", "La#", "A#"],

            "B": ["Ni", "Si", "B"]
        };
    }

    toArray() {
        const arr = [];
        const json = this.toJSON();
        const keys = Object.keys(json);

        for (const key of keys) {
            arr.push({
                note: key,
                frequency: json[key]
            });
        }

        return arr;
    }

    toJSON() {
        const raw = JSON.stringify({
            ...this
        }).replace(/S/g, "#");

        return JSON.parse(raw);
    }

}

module.exports = Octave;