type LeveledAttribute = {
    name: string,
    level: number
}

type MechData = {
    name: string,
    pilot_stats: number[],
    size: number,
    mech_stats: {
        structure: number,
        stress: number,
        hp: number,
        armor: number,
        heat_cap: number,
        repair_cap: number,
        attack_bonus: number,
        tech_attack_bonus: number,
        limited_systems_bonus: number,
        speed: number,
        evasion: number,
        edefense: number,
        sensors: number,
        save_dc: number,
        weapons: string[],
        systems: string[]
    }
}

type PilotData = {
    name: string,
    callsign: string,
    skill_triggers: LeveledAttribute[],
    gear: string[],
    licenses: LeveledAttribute[],
    core_bonuses: string[],
    talents: LeveledAttribute[],
    mech: MechData
}