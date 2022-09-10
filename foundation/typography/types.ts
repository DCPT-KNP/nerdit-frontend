export const TypographyType = {
  Display1: 'display1',
  Display2: 'display2',
  Header1: 'header1',
  Header2: 'header2',
  Title1: 'title1',
  Title2: 'title2',
  Body1: 'body1',
  Body2: 'body2',
  Caption1: 'caption1',
} as const
export type TypographyType = typeof TypographyType[keyof typeof TypographyType]
