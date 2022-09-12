import palette from '../foundation/palette'

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

export const SkillColorMap: Record<Skill, string> = {
  [Skill.UXD]: palette.Accent[10],
  [Skill.UXR]: palette.Accent[20],
  [Skill.UXW]: palette.Accent[30],
  [Skill.UID]: palette.Accent[40],
  [Skill.IXD]: palette.Accent[50],
  [Skill.BXD]: palette.Accent[60],
  [Skill.GRD]: palette.Accent[70],
} as const

export const SkillNameMap: Record<Skill, string> = {
  [Skill.UXD]: 'UX Design',
  [Skill.UXR]: 'UX Research',
  [Skill.UXW]: 'UX Writing',
  [Skill.UID]: 'UI Design',
  [Skill.IXD]: 'Interaction Design',
  [Skill.BXD]: 'Brand Design',
  [Skill.GRD]: 'Graphic Design',
}
