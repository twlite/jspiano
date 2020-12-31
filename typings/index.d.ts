import { EventEmitter } from "events";

declare module "jspiano" {

    export type OctaveKey = "C0" | "C1" | "C2" | "C3" | "C4" | "C5" | "C6" | "C7";
    export type Note = keyof OctaveJSON;
    export const version: string;

    export interface SheetsManager {
        all(): string[];
        has(name: string): boolean;
        get(name: string): string | null;
        set(name: string, data?: SheetInterface[]): string | false;
        delete(name: string): boolean;
    }

    export interface SheetInterface {
        note: Note;
        octave: Octave;
        duration?: number;
    }

    export const Sheets: SheetsManager;

    export interface Source {
        path: string;
        pressNote(frequency: number, duration: number): boolean;
    }

    export interface PianoNotes {
        octave: OctaveKey;
        notes: Octave;
    }

    export interface OctaveJSON {
        "C": number;
        "C#": number;
        "D": number;
        "D#": number;
        "E": number;
        "F": number;
        "F#": number;
        "G": number;
        "G#": number;
        "A": number;
        "A#": number;
        "B": number;
    }

    export interface OctaveArray {
        note: keyof OctaveJSON;
        frequency: number;
    }

    export class Octave {
        C: number;
        CS: number;
        D: number;
        DS: number;
        E: number;
        F: number;
        FS: number;
        G: number;
        GS: number;
        A: number;
        AS: number;
        B: number;

        constructor(node?: number);

        static get octaves(): OctaveKey[];
        static get notes(): Note[];
        static get names(): NoteNames;

        toArray(): OctaveArray[];
        toJSON(): OctaveJSON;
    }

    export interface PianoPressData {
        note: Note;
        octave: Octave;
        frequency: number,
        time: number;
    }

    export interface NoteNames {
        "C": ["Sa", "Do", "C"];
        "C#": ["Sa#", "Do#", "C#"];

        "D": ["Re", "Re", "D"];
        "D#": ["Re#", "Re#", "D#"];

        "E": ["Ga", "Mi", "E"];

        "F": ["Ma", "Fa", "F"];
        "F#": ["Ma#", "Fa#", "F#"];

        "G": ["Pa", "Sol", "G"];
        "G#": ["Pa#", "Sol#", "G#"];

        "A": ["Dha", "La", "A"];
        "A#": ["Dha#", "La#", "A#"];

        "B": ["Ni", "Si", "B"];
    }

    export class Piano extends EventEmitter {

        notes: PianoNotes[];
        constructor(octave?: OctaveKey | OctaveKey[]);

        private _createOctave(octavekey: OctaveKey | OctaveKey[]): void;

        press(note: Note, octave: OctaveKey, duration?: number): boolean;

        playSheet(path: string): void;

        on(event: "press" | string, listener: (note: PianoPressData) => void): this;
        once(event: "press" | string, listener: (note: PianoPressData) => void): this;

    }

    export const source: Source;

}