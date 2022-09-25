import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

import { CareerShape } from '../../constants/careerShapes'
import Icon from '../../foundation/Icon'
import palette from '../../foundation/palette'
import Spacing from '../../foundation/Spacing'
import Typo from '../../foundation/typography'
import useGetDeviceType, { DeviceType } from '../../hooks/useGetDeviceType'
import pxToRem from '../../utils/pxToRem'
import typeI from './images/typeI.svg'
import typePi from './images/typePi.svg'
import typeT from './images/typeT.svg'

const CareerShapeName: Record<CareerShape, string> = {
  [CareerShape.I]: 'I-shaped Designer',
  [CareerShape.T]: 'T-shaped Designer',
  [CareerShape.Pi]: 'π-shaped Designer',
}
const CarrerShapeDescription: Record<CareerShape, string> = {
  [CareerShape.I]:
    'I자형 인재는 한가지 분야에 전문성을 가진 디자이너입니다. 일명 ‘Specialist’로 다른 분야에 대해 많이 알지 못하지만 특정 분야의 뛰어난 전문성을 가집니다.',
  [CareerShape.T]:
    'T자형 인재는 다양한 분야에 능하며 그 중 하나의 분야에 전문성을 가진 디자이너입니다. 기술의 깊이와 폭을 모두 가지고 있습니다.',
  [CareerShape.Pi]:
    'π자형 인재는 다양한 분야에 능하며 그 중 인접한 2가지의 분야에 전문성을 가진 디자이너입니다. T자형 인재에서 전문성을 더한 형태로 떠오르는 인재형입니다.',
}
const CareerShapeImageMapper = {
  [CareerShape.I]: typeI,
  [CareerShape.T]: typeT,
  [CareerShape.Pi]: typePi,
}

const getMobileLayout = (careerShape: CareerShape) => (
  <>
    <QuestionButton icon="help" />
    <img src={CareerShapeImageMapper[careerShape]} alt={careerShape} />
    <Spacing rem={pxToRem(19)} />
    <Typo type="header2">{CareerShapeName[careerShape]}</Typo>
  </>
)

const getDesktopLayout = (careerShape: CareerShape) => (
  <>
    <img src={CareerShapeImageMapper[careerShape]} alt={careerShape} />
    <Spacing inline rem={2.5} />
    <div>
      <Typo type="header2">{CareerShapeName[careerShape]}</Typo>
      <Spacing rem={0.5} />
      <Typo type="body1" color={palette.Gray[50]}>
        {CarrerShapeDescription[careerShape]}
      </Typo>
    </div>
  </>
)

interface Props {
  careerShape: CareerShape
  selected?: boolean
  onClick?: () => void
}

const CareerShapeChooseButton = ({ careerShape, selected, onClick }: Props) => {
  const deviceType = useGetDeviceType()

  return (
    <Container
      selected={selected ?? false}
      onClick={onClick}
      isMobile={deviceType === DeviceType.Mobile}
    >
      {deviceType === DeviceType.Mobile && getMobileLayout(careerShape)}
      {deviceType === DeviceType.Desktop && getDesktopLayout(careerShape)}
    </Container>
  )
}

const desktopStyle = css`
  max-width: ${pxToRem(800)}rem;
  padding: 2rem 2.5rem;
`

const mobileStyle = css`
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  position: relative;
`

const Container = styled.div<{ selected: boolean; isMobile: boolean }>`
  cursor: pointer;
  border: ${pxToRem(1)}rem solid
    ${({ selected }) => (selected ? palette.Primary : palette.Gray[20])};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  &:last-of-type {
    margin-bottom: 0;
  }

  ${({ isMobile }) => (isMobile ? mobileStyle : desktopStyle)}
`

const QuestionButton = styled(Icon)`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`

export default CareerShapeChooseButton
