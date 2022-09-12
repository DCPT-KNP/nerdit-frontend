export const Skill = {
  UXR: 'UXR',
  UXD: 'UXD',
  UXW: 'UXW',
  UID: 'UID',
  IXD: 'IXD',
  BXD: 'BXD',
  GRD: 'GRD',
} as const
export type Skill = typeof Skill[keyof typeof Skill]
