import { Skill } from '../../constants/skills'
import palette from '../../foundation/palette'
import pxToRem from '../../utils/pxToRem'

export const Colors: Record<SkillChoose, string> = {
  UXD: palette.Accent[10],
  UXR: palette.Accent[20],
  UXW: palette.Accent[30],
  UID: palette.Accent[40],
  IXD: palette.Accent[50],
  BXD: palette.Accent[60],
  GRD: palette.Accent[70],
  Choose: palette.Gray[20],
} as const

export const GraphType = {
  I: 'I',
  T: 'T',
  Pi: 'Pi',
} as const
export type GraphType = typeof GraphType[keyof typeof GraphType]

export const GraphPartVariant = {
  big: 'big',
  small: 'small',
} as const
export type GraphPartVariant = keyof typeof GraphPartVariant

export const Choose = 'Choose' as const
export type Choose = typeof Choose
export const SkillChoose = { ...Skill, Choose }
export type SkillChoose = Skill | Choose

export const PART_WIDTH = pxToRem(100)
export const PART_HEIGHT_SMALL = pxToRem(100)
export const PART_HEIGHT_LARGE = '100%'
