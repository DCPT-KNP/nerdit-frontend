export interface ThemeType {
  GRAY10: string
  GRAY20: string
  GRAY30: string
  GRAY40: string
  GRAY50: string
  GRAY60: string
  GRAY70: string

  semantic1: string
  semantic2: string
  semantic3: string
  semantic4: string
  semantic5: string
  semantic6: string
  semantic7: string
  semantic8: string
}

export type Light = 'light'
export type Dark = 'dark'

export type AppTheme = Light | Dark

export type ThemeGroupType = Record<AppTheme, ThemeType>
