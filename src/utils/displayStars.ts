import { ExtractionSpeed, SkillSpeed, type Stars } from "./GameData";

export function displayStars(stars: Stars) {
    return "★".repeat(stars) + "☆".repeat(5 - stars)
}

export function calculateMachineCompletionTime(
    /** extraction stars of a character */
    extractionStars: Stars,
    /** skill check stars of a character */
    skillCheckStars: Stars,
    /** 60% chance of success in skill check */
    skillCheckSuccessChance: number = 0.6,
    /** skill check appear chance, by default 25% */
    skillCheckAppearChance: number = 0.25,
    /** machine units, by default 45 without extraction cards and other stuff */
    machineUnits: number = 45,
    /** cooldown before chances start executing every second */
    machineCooldown: number = 3,
) {
    const passiveCompletionRate = ExtractionSpeed[extractionStars]
    const skillCompletionRate = SkillSpeed[skillCheckStars]

    /** for machine cooldown 3 seconds and skill check appear chance 25% it
     *  results on 7 seconds
     */
    const averageTimeForSkillCheckToAppear = machineCooldown + (1 / skillCheckAppearChance)

    /** average boost it gives, for 60% success chance and 2 completion rate
     *  it gives 1.2 units */
    const averageBoostInSkillCheck = skillCheckSuccessChance * skillCompletionRate

    /** for 1.2 / 7 it gives 0.17
     *  which is units per second, that the boost will give */
    const averageSkillCheckSpeed = averageBoostInSkillCheck / averageTimeForSkillCheckToAppear

    /** total skill check speed, for 1 passive speed and 0.17 boost per second
     *  it gives 1.17 units per second */
    const totalSkillCheckSpeed = passiveCompletionRate + averageSkillCheckSpeed
    const machineCompletionTime = machineUnits / totalSkillCheckSpeed
    return machineCompletionTime
}