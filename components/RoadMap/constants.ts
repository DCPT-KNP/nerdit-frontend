export const RoadMapStep = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
} as const
export type RoadMapStep = typeof RoadMapStep[keyof typeof RoadMapStep]

export const RoadMapDescMap: Record<RoadMapStep, string> = {
  [RoadMapStep.FIRST]:
    '나에게 맞는 커리어 모델을 선택하면 해당 모델에 맞춰 세부 커리어 방향을 설계할 수 있습니다.',
  [RoadMapStep.SECOND]:
    '전문성을 가지고 가장 집중적으로 발전시킬 Primary 역량을 선택합니다. *π형 모델 선택 시 Secondary 역량을 추가 선택합니다.',
  [RoadMapStep.THIRD]:
    'Primary 역량에 비해 깊이는 낮으나 추가적으로 함께 발전시키고 싶은 역량을 선택합니다. * I형 모델 선택 시 해당 단계는 건너뜁니다.',
  [RoadMapStep.FOURTH]:
    '직접 제작한 커리어 로드맵 결과를 확인 후 공유 또는 저장합니다. 로그인 시 커리어 로드맵 별 세부 역량 및 Tip을 확인할 수 있습니다.',
}

export const RoadMapStepCount: Record<RoadMapStep, string> = {
  [RoadMapStep.FIRST]: 'Step 01',
  [RoadMapStep.SECOND]: 'Step 02',
  [RoadMapStep.THIRD]: 'Step 03',
  [RoadMapStep.FOURTH]: 'Step 04',
}
