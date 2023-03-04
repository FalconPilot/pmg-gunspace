export enum Hardpoint {
  Barrel,
  Grip,
  Handguard,
}

export enum GunAction {
  BoltAction = 'Bolt-action',
  BurstFire = 'Burst-fire',
  FullAuto = 'Full-auto',
  Revolving = 'Revolving',
  SemiAuto = 'Semi-auto',
  SingleShot = 'Single-short',
}

export enum GunShape {
  Handgun = 'Pistol',
  LongRifle = 'Rifle',
  ShortRifle = 'Carbine',
}

export type GunPartTemplate<HP extends Hardpoint> = {
  zIndex: number,
  hardpoint: HP,
}

export type GunTemplate<HPS extends Hardpoint[]> = {
  name: string,
  hardpoints: HPS,
}
