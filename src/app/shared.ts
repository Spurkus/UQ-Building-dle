import ignore_buildings from "./buildings.json";

function randElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Maybe we should move this somewhere else idk
export interface Building {
    name: string;
    precinct: string;
    latitude: number;
    longitude: number;
  }

// Make Typescript happy
export const buildings: Record<string, Building> = ignore_buildings;

export const correct_answer = randElement(Object.keys(buildings))
