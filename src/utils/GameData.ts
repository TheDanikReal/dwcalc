// updated script in ts and refactored, WIP

export const Characters = {
  Astro: "astro",
  Bassie: "bassie",
  Blot: "blot",
  Bobette: "bobette",
  Boxten: "boxten",
  Brightney: "brightney",
  Brusha: "brusha",
  Coal: "coal",
  Cocoa: "cocoa",
  Connie: "connie",
  Cosmo: "cosmo",
  Dandy: "dandy",
  Eclipse: "eclipse",
  Eggson: "eggson",
  Finn: "finn",
  Flutter: "flutter",
  Flyte: "flyte",
  Gigi: "gigi",
  Ginger: "ginger",
  Glisten: "glisten",
  Goob: "goob",
  Gourdy: "gourdy",
  Looey: "looey",
  Pebble: "pebble",
  Poppy: "poppy",
  "Razzle & Dazzle": "razzle-and-dazzle",
  Ribecca: "ribecca",
  Rodger: "rodger",
  Rudie: "rudie",
  Scraps: "scraps",
  Shelly: "shelly",
  Shrimpo: "shrimpo",
  Soulvester: "soulvester",
  Sprout: "sprout",
  Squirm: "squirm",
  Teagan: "teagan",
  Tisha: "tisha",
  Toodles: "toodles",
  Vee: "vee",
  Yatta: "yatta",
  Waxwell: "waxwell"
} as const

export const SkillSpeed: Record<Stars, number> = {
  1: 1,
  2: 1.5,
  3: 2,
  4: 2.5,
  5: 3
}

export const ExtractionSpeed: Record<Stars, number> = {
    1: 0.75,
    2: 0.85,
    3: 1,
    4: 1.2,
    5: 1.5
  }

export type CharacterValue = (typeof Characters)[keyof typeof Characters];

export type Stars = 1 | 2 | 3 | 4 | 5;

export interface BaseStats {
  skill: Stars;
  extraction: Stars;
  speed: Stars;
  stamina: Stars;
}

export interface StatContext {
  isBlackout: boolean;
  currentHealth: number;
  maxHealth: number;
  numberOfPlayers: number;
  // character buffs
  isGourdyPanic: boolean
  isShellyBuff: boolean
  // random
  isFirstTravel: boolean
}

export interface CharacterDefinition {
  image: string;
  stats: BaseStats;
  // passive abilities
  applyStamina?: (base: number, ctx: StatContext) => number;
  applyExtraction?: (base: number, ctx: StatContext) => number;
  applySpeed?: (base: number, ctx: StatContext) => number;
  applySkill?: (base: number, ctx: StatContext) => number;
}

export const definitions: Record<CharacterValue, CharacterDefinition> = {
  [Characters.Astro]: {
    image: "Astro_Render.webp",
    stats: { skill: 2, extraction: 3, speed: 3, stamina: 3 },
  },
  [Characters.Bassie]: {
    image: "Bassie_Render.webp",
    stats: { skill: 1, extraction: 2, speed: 5, stamina: 4 },
  },
  [Characters.Blot]: {
    image: "Blot_Render.webp",
    stats: { skill: 1, extraction: 2, speed: 4, stamina: 5 },
  },
  [Characters.Bobette]: {
    image: "Bobette_Render.webp",
    stats: { skill: 4, extraction: 2, speed: 3, stamina: 5 },
  },
  [Characters.Boxten]: {
    image: "Boxten_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 3, stamina: 3 },
    applyExtraction: (base, ctx) => base + 0.06 * Math.max(1, ctx.numberOfPlayers),
  },
  [Characters.Brightney]: {
    image: "Brightney_Render.webp",
    stats: { skill: 3, extraction: 4, speed: 3, stamina: 4 },
  },
  [Characters.Brusha]: {
    image: "Brusha_Render.webp",
    stats: { skill: 4, extraction: 1, speed: 3, stamina: 3 }
  },
  [Characters.Coal]: {
    image: "Coal_Render.webp",
    stats: { skill: 2, extraction: 2, speed: 4, stamina: 4 },
  },
  [Characters.Cocoa]: {
    image: "Cocoa_Render.webp",
    stats: { skill: 3, extraction: 2, speed: 4, stamina: 2 },
  },
  [Characters.Connie]: {
    image: "Connie_Render.webp",
    stats: { skill: 2, extraction: 4, speed: 1, stamina: 3 },
  },
  [Characters.Cosmo]: {
    image: "Cosmo_Render.webp",
    stats: { skill: 1, extraction: 3, speed: 3, stamina: 4 },
  },
  [Characters.Dandy]: {
    image: "Dandy_Render.webp",
    stats: { skill: 5, extraction: 5, speed: 5, stamina: 3 },
  },
  [Characters.Eclipse]: {
    image: "Eclipse_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 4, stamina: 3 },
    applyStamina: (base, ctx) => (ctx.isBlackout ? base * 1.6 : base),
    applySpeed: (base, ctx) => (ctx.isBlackout ? base * 1.2 : base),
  },
  [Characters.Eggson]: {
    image: "Eggson_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 3, stamina: 3 },
  },
  [Characters.Finn]: {
    image: "Finn_Render.webp",
    stats: { skill: 4, extraction: 3, speed: 3, stamina: 2 },
  },
  [Characters.Flutter]: {
    image: "Flutter_Render.webp",
    stats: { skill: 2, extraction: 2, speed: 4, stamina: 4 },
  },
  [Characters.Flyte]: {
    image: "Flyte_Render.webp",
    stats: { skill: 2, extraction: 3, speed: 4, stamina: 2 },
  },
  [Characters.Gigi]: {
    image: "Gigi_Render.webp",
    stats: { skill: 5, extraction: 3, speed: 3, stamina: 3 },
  },
  [Characters.Ginger]: {
    image: "Ginger_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 2, stamina: 3 },
  },
  [Characters.Glisten]: {
    image: "Glisten_Render.webp",
    stats: { skill: 2, extraction: 5, speed: 3, stamina: 3 },
  },
  [Characters.Goob]: {
    image: "Goob_Render.webp",
    stats: { skill: 3, extraction: 2, speed: 4, stamina: 4 },
  },
  [Characters.Gourdy]: {
    image: "Gourdy_Render.webp",
    stats: { skill: 5, extraction: 5, speed: 4, stamina: 1 },
    applySpeed: (base, ctx) => ctx.isGourdyPanic && ctx.isFirstTravel ? base * 1.3 : base
  },
  [Characters.Looey]: {
    image: "Looey_Render.webp",
    stats: { skill: 4, extraction: 3, speed: 3, stamina: 3 },
    applySpeed: (base, ctx) => base * (1 + 0.2 * (ctx.maxHealth - ctx.currentHealth))
  },
  [Characters.Pebble]: {
    image: "Pebble_Render.webp",
    stats: { skill: 3, extraction: 1, speed: 5, stamina: 4 },
  },
  [Characters.Poppy]: {
    image: "Poppy_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 3, stamina: 3 },
  },
  [Characters["Razzle & Dazzle"]]: {
    image: "Razzle_&_Dazzle_Render.webp",
    stats: { skill: 3, extraction: 5, speed: 5, stamina: 3 },
  },
  [Characters.Ribecca]: {
    image: "Ribecca_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 3, stamina: 3 },
  },
  [Characters.Rodger]: {
    image: "Rodger_Render.webp",
    stats: { skill: 3, extraction: 4, speed: 2, stamina: 3 },
  },
  [Characters.Rudie]: {
    image: "Rudie_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 3, stamina: 3 },
  },
  [Characters.Scraps]: {
    image: "Scraps_Render.webp",
    stats: { skill: 2, extraction: 3, speed: 2, stamina: 5 },
  },
  [Characters.Shelly]: {
    image: "Shelly_Render.webp",
    stats: { skill: 5, extraction: 3, speed: 3, stamina: 2 },
  },
  [Characters.Shrimpo]: {
    image: "Shrimpo_Render.webp",
    stats: { skill: 1, extraction: 1, speed: 1, stamina: 1 },
  },
  [Characters.Soulvester]: {
    image: "Soulvester_Render.webp",
    stats: { skill: 5, extraction: 5, speed: 1, stamina: 1 },
  },
  [Characters.Sprout]: {
    image: "Sprout_Render.webp",
    stats: { skill: 2, extraction: 2, speed: 4, stamina: 5 },
  },
  [Characters.Squirm]: {
    image: "Squirm_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 3, stamina: 2 },
  },
  [Characters.Teagan]: {
    image: "Teagan_Render.webp",
    stats: { skill: 3, extraction: 3, speed: 3, stamina: 4 },
  },
  [Characters.Tisha]: {
    image: "Tisha_Render.webp",
    stats: { skill: 4, extraction: 2, speed: 4, stamina: 2 },
  },
  [Characters.Toodles]: {
    image: "Toodles_Render.webp",
    stats: { skill: 3, extraction: 2, speed: 3, stamina: 3 },
  },
  [Characters.Vee]: {
    image: "Vee_Render.webp",
    stats: { skill: 4, extraction: 5, speed: 2, stamina: 3 },
  },
  [Characters.Yatta]: {
    image: "Yatta_Render.webp",
    stats: { skill: 3, extraction: 5, speed: 4, stamina: 1 },
  },
  [Characters.Waxwell]: {
    image: "Waxwell_Render.webp",
    stats: { skill: 5, extraction: 2, speed: 5, stamina: 1 }
  }
};
