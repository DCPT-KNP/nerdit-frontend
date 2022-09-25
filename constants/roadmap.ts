export const RoadMap = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
} as const
export type RoadMap = typeof RoadMap[keyof typeof RoadMap]
