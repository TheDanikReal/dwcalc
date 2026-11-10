import { atom } from "nanostores";

interface SimulationSettings {
    /** percents, eg 0.6 = 60% */
    skillCheckAccuracy: number
}

export const simulationSettings = atom<SimulationSettings>({ skillCheckAccuracy: 0.6})

export function setAccuracy(accuracy: number) {
    simulationSettings.set({ skillCheckAccuracy: accuracy })
}