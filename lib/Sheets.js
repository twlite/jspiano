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
    }

}