import ignore_buildings from "./buildings.json";

// Maybe we should move this somewhere else idk
export interface Building {
    name: string;
    precinct: string;
    latitude: number;
    longitude: number;
    difficulty: string;
}

// Make Typescript happy
export const buildings: Record<string, Building> = ignore_buildings;
