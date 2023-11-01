const song = {
    metaData: {
        title: 'Highway to Hell',
        author: 'AC/DC',
        date: '27.07.1979',
    },
    tracks: [
        {
            id: 1,
            name: 'Piano',
            soundType: 'virtual_instrument',
            instrument: 'piano',
            regions: [
                {
                    id: 1,
                    start: 0,
                    end: 3,
                    midiData: [
                        {note: 'F4', velocity: 80, startTime: 0, duration: 1},
                        {note: 'D4', velocity: 80, startTime: 1, duration: 1},
                        {note: 'E4', velocity: 90, startTime: 2, duration: 1},
                    ],
                    effects: [
                        {type: 'reverb', intensity: 15},
                        {type: 'delay', time: 0.5, feedback: 30, mix: 20},
                    ],
                },
            ],
            pan: 5,
            volume: 78,
        },
        {
            id: 2,
            name: 'Guitar',
            soundType: 'virtual_instrument',
            instrument: 'guitar',
            regions: [
                {
                    id: 1,
                    start: 0,
                    end: 5,
                    midiData: [
                        {note: 'C4', velocity: 10, startTime: 0, duration: 1},
                        {note: 'E4', velocity: 20, startTime: 1, duration: 1},
                        {note: 'E4', velocity: 30, startTime: 2, duration: 1},
                        {note: 'F4', velocity: 40, startTime: 3, duration: 1},
                        {note: 'D4', velocity: 50, startTime: 4, duration: 1},
                    ],
                },
            ],
            pan: 10,
            volume: 60,
        },
    ],
} as const;


type MetaData = {
    title: string;
    author: string;
    date: string;
}

type MidiData = {
    note: string;
    velocity: number;
    startTime: number;
    duration: number;
}

type Region = {
    id: number;
    start: number;
    end: number;
    midiData: readonly MidiData[]
}

type Track = {
    id: number;
    name: string;
    soundType: string;
    instrument: string;
    pan: number;
    volume: number;
    regions: readonly Region[]
}

type Song = {
    metaData: MetaData;
    tracks: readonly Track[]
}


type UnionOfNumbersLessThan<N extends number, HelperArray extends number[] = []> = N extends HelperArray['length']
 ? HelperArray[number] 
 : UnionOfNumbersLessThan<N, [...HelperArray, HelperArray['length']]>

type NumberRange<L extends number, H extends number> = H | Exclude<UnionOfNumbersLessThan<H>, UnionOfNumbersLessThan<L>>


type ToNumber<S extends string> = S extends `${infer N extends number}` ? N : never;

type Cast<A1 extends any, A2 extends any> =
    A1 extends A2
    ? A1
    : A2


// split k1->k2->(s-e)->k3 like structure to array of keys
type SplitPath<Path extends string> = Path extends `${infer First}->${infer Rest}`? [First, ... SplitPath<Rest>] :[Path]


type RecursivePick<T extends unknown, Keys extends string[]> = Keys extends [infer Key, ...infer Rest] 
? Key extends `(${infer Start}-${infer End})` 
    // If we have (start-end) range then
    //@ts-ignore
    ? RecursivePick<T[Cast<NumberRange<ToNumber<Start>, ToNumber<End>>, keyof T> extends  T[Cast<Key, keyof T>] ? T[Cast<Key, keyof T>] : never], Cast<Rest, string[]>>
    // else recursively get property
    : RecursivePick<T[Cast<Key, keyof T>], Cast<Rest, string[]>> 
: T

type Get<T extends unknown, Path extends string> = SplitPath<Path>[0] extends keyof T
// if First key exists in object
? SplitPath<Path> extends [infer Key, ...infer Rest] 
    ? RecursivePick<Cast<T[Cast<Key, keyof T>], object>, Cast<Rest, string[]>>
    : never
: never


// TESTS!
type songAuthor = Get<typeof song, 'metaData->author'>; // AC/DC
type firstTrackVolume = Get<typeof song, 'tracks->0->volume'>; // 78
type tracksVolume = Get<typeof song, 'tracks->(0-2)->volume'>; // 78 | 60
type tracksVolume2 = Get<typeof song, 'tracks->(0-2)->regions->(0-2)->end'>; // 78 | 60
type notes = Get<typeof song, 'tracks->1->regions->0->midiData->(0-5)->note'>; // "F4" | "D4" | "E4" | "C4"
type midiData = Get<typeof song, 'tracks->1->regions->0->midiData->(0-2)'>; // { note: "C4", velocity: 10, 
// startTime: 0, duration: 1, } | { note: "E4", velocity: 20, startTime: 1, duration: 1 }
type thirdNoteVelocity = Get<typeof song, 'tracks->1->regions->0->midiData->3->velocity'>; // 40
type qwe = Get<typeof song, 'lala->nana'>; // 40
type asd = Get<typeof song, 'metaData->nana'>; // 40