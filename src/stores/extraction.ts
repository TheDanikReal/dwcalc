import { map } from "nanostores";

interface SimulationSettings {
    /** percents, eg 0.6 = 60% */
    skillCheckAccuracy: number,
    techSavvy: boolean
}

export const simulationSettings = map<SimulationSettings>({ skillCheckAccuracy: 0.6, techSavvy: false })

export function setAccuracy(accuracy: number) {
    simulationSettings.setKey("skillCheckAccuracy", accuracy)
}

export function setTechSavvy(techSavvy: boolean) {
    simulationSettings.setKey("techSavvy", techSavvy)
}