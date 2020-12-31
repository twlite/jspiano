const fs = require("fs");

module.exports = {
    all() {
        const data = fs.readdirSync(`${__dirname}/sheets`);

        return data;
    },
    has(name) {
        if (!name || typeof name !== "string") return false;
        if (!fs.existsSync(`${__dirname}/sheets/${name}.json`)) return false;

        return true;
    },
    get(name) {
        if (!this.has(name)) return null;
        return `${__dirname}/sheets/${name}.json`;
    },
    set(name, data) {
        if (!name || typeof name !== "string") throw new Error("Invalid name");
        if (!Array.isArray(data) || !data.some(x => x.note && x.octave)) throw new Error("Malformed data!");

        fs.writeFileSync(`${__dirname}/sheets/${name}.json`, JSON.stringify(data));

        return this.get(name) || false;
    },
    delete(name) {
        if (!this.has(name)) return false;

        try {
            fs.unlinkSync(this.get(name));
            return true;
        } catch(e) {
            return false;
        }
    }

}