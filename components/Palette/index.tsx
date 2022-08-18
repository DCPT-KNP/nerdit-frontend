export type ColorToken =
  | '#ffffff'
  | '#FAFAFA'
  | '#F0F0F0'
  | '#BDBDBD'
  | '#999999'
  | '#666666'
  | '#1A1A1A'
  | '#FA73FD'
  | '#F63E2B'
  | '#FC7D08'
  | '#F5B72B'
  | '#60CE93'
  | '#4573F3'
  | '#8D82F3'

export type ColorTokenKeys =
  | 'gray10'
  | 'gray20'
  | 'gray30'
  | 'gray40'
  | 'gray50'
  | 'gray60'
  | 'gray70'
  | 'UXD'
  | 'UXR'
  | 'UXW'
  | 'UID'
  | 'IXD'
  | 'BXD'
  | 'GRD'
  | 'ALL'

export const palette: Record<ColorTokenKeys, ColorToken> = {
  gray10: '#ffffff',
  gray20: '#FAFAFA',
  gray30: '#F0F0F0',
  gray40: '#BDBDBD',
  gray50: '#999999',
  gray60: '#666666',
  gray70: '#1A1A1A',
  UXD: '#FA73FD',
  UXR: '#F63E2B',
  UXW: '#FC7D08',
  UID: '#F5B72B',
  IXD: '#60CE93',
  BXD: '#4573F3',
  GRD: '#8D82F3',
  ALL: '#1A1A1A',
} as const
