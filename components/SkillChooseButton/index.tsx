import styled from '@emotion/styled'
import React from 'react'

import { Skill, SkillNameMap } from '../../constants/skills'
import { breakpoints } from '../../foundation/breakpoints'
import palette from '../../foundation/palette'
import Spacing from '../../foundation/Spacing'
import Typo from '../../foundation/typography'
import pxToRem from '../../utils/pxToRem'
import Flex from '../Flex'
import ColorThumbnail from './ColorThumbnail'
import { SkillDescriptionMap } from './constants'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  skill: Skill
  clicked?: boolean
}

const SkillChooseButton = ({ skill, clicked = false, ...rest }: Props) => {
  return (
    <Container clicked={clicked} {...rest}>
      <Flex justifyContent="flex-start">
        <ColorThumbnail skill={skill} />
        <Spacing rem={0.75} inline />
        <Typo type="title1">{SkillNameMap[skill]}</Typo>
      </Flex>
      <Spacing rem={0.75} />
      <LeftAlignedText type="caption1" color={palette.Gray[40]}>
        {SkillDescriptionMap[skill]}
      </LeftAlignedText>
    </Container>
  )
}

const Container = styled.button<{ clicked: boolean }>`
  padding: 1rem;
  background: ${palette.Base.White};
  border: 1px solid
    ${({ clicked }) => (clicked ? palette.Primary[10] : palette.Gray[20])};
  cursor: pointer;
  @media (min-width: ${breakpoints.mobileMaxWidth}px) {
    width: ${pxToRem(390)}rem;
    height: ${pxToRem(104)}rem;
  }
  @media (max-width: ${breakpoints.mobileMaxWidth}px) {
    width: 100%;
  }
  margin-bottom: 0.75rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`

const LeftAlignedText = styled(Typo)`
  text-align: left;
`

export default SkillChooseButton
