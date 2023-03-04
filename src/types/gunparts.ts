export enum Hardpoint {
  Barrel,
  Bolt,
  Grip,
  Handguard,
}

export enum GunAction {
  BoltAction = 'Bolt-action',
  BurstFire = 'Burst-fire',
  FullAuto = 'Full-auto',
  LeverAction = 'Lever-action',
  Revolving = 'Revolving',
  SemiAuto = 'Semi-auto',
  SingleShot = 'Single-shot',
}

export enum GunShape {
  Handgun = 'Pistol',
  LongRifle = 'Rifle',
  ShortRifle = 'Carbine',
}

export enum GunMagazine {
  BeltFed = 'Belt-fed',
  BoxMag = 'Box magazine',
  StripperClip = 'Stripper clip',
}

export enum Caliber {
  x22lr = '.22 LR',
  x9mm = '9mm',
  x45ACP = '.45 ACP',
  x50AE = '.50 AE',
  x556x45 = '5.56x45mm',
  x762x39 = '7.62x39mm',
  x762x54 = '7.62x54mm',
  x127x99 = '12.7x99mm',
  x127x108 = '12.7x108mm',
  x20g = '20 Gauge',
  x12g = '12 Gauge',
}

export enum Optics {
  Iron = 'Iron sights',
  FiberOptic = 'Fiber-optic sights',
  Target = 'Target sights',
  RedDot = 'RDS/Holographic',
  Scope = 'Scope',
}

// Pistol-compatible data
export const PistolCalibers = [
  Caliber.x22lr,
  Caliber.x9mm,
  Caliber.x45ACP,
  Caliber.x50AE,
] as const

export const PistolActions = [
  GunAction.SingleShot,
  GunAction.SemiAuto,
  GunAction.BurstFire,
  GunAction.FullAuto,
  GunAction.Revolving,
] as const

export const PistolMags = [
  GunMagazine.BoxMag,
  GunMagazine.StripperClip,
] as const

// Rifle-compatible data
export const RifleCalibers = [
  ...PistolCalibers,
  Caliber.x556x45,
  Caliber.x45ACP,
  Caliber.x762x39,
  Caliber.x762x54,
  Caliber.x20g,
  Caliber.x12g,
] as const

export const RifleActions = [
  ...PistolActions,
  GunAction.LeverAction,
  GunAction.BoltAction,
] as const

export const RifleMags = [
  ...PistolMags,
  GunMagazine.BeltFed,
] as const

export type GunPartTemplate<HP extends Hardpoint> = {
  zIndex: number,
  hardpoint: HP,
}

export type GunTemplate<HPS extends Hardpoint[]> = {
  name: string,
  hardpoints: HPS,
}
