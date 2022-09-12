import { Skill } from '../../constants/skills'
import palette from '../../foundation/palette'

export const Colors: Record<Skill, string> = {
  UXD: palette.Accent[10],
  UXR: palette.Accent[20],
  UXW: palette.Accent[30],
  UID: palette.Accent[40],
  IXD: palette.Accent[50],
  BXD: palette.Accent[60],
  GRD: palette.Accent[70],
} as const
