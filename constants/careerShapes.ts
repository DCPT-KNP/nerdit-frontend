export const CareerShape = {
  I: 'I',
  T: 'T',
  Pi: 'Pi',
} as const
export type CareerShape = typeof CareerShape[keyof typeof CareerShape]
