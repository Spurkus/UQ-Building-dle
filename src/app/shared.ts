import ignore_buildings from "./buildings.json";

function randElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

const difficulties = {
    "easy": 1,
    "medium": 2,
    "hard": 3,
    "impossible": 4
}

// Maybe we should move this somewhere else idk
export interface Building {
    name: string;
    precinct: string;
    latitude: number;
    longitude: number;
    difficulty: keyof typeof difficulties;
}

// This causes errors on the server but you can ignore them I think
// This is probably bad and we should figure out how to use useLocalStorage
export const chosen_difficulty = parseInt(localStorage.getItem('difficulty') ?? "2")

// Make Typescript happy
export const buildings: Record<string, Building> = {};
for (const k in ignore_buildings) {
    // @ts-ignore
    if (difficulties[ignore_buildings[k].difficulty] <= chosen_difficulty)
        // @ts-ignore
        buildings[k] = ignore_buildings[k];
}

export const correct_answer = randElement(Object.keys(buildings))
