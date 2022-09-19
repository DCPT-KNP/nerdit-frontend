import palette from '../../foundation/palette'

export const ButtonVariant = {
  Filled: 'Filled',
  Outlined: 'Outlined',
} as const
export type ButtonVariant = typeof ButtonVariant[keyof typeof ButtonVariant]

export const ButtonColorByState = {
  Enabled: palette.Primary,
  Disabled: palette.Gray[30],
  Hover: palette.Gray[40],
} as const
