import styled from '@emotion/styled'
import React from 'react'

import { Skill } from '../../constants/skills'

import palette from '../../foundation/palette'
import Typo from '../../foundation/typography'
import pxToRem from '../../utils/pxToRem'
import Flex from '../Flex'
import ColorThumbnail from './ColorThumbnail'

interface Props {
  skillSet: Skill[]
}

const SkillChips = ({ skillSet }: Props) => {
  return (
    <SkillSetContainer alignItems="center">
      {skillSet.length < 5 ? (
        <>
          {skillSet.map((skill: Skill, idx: number) => (
            <>
              <ColorThumbnail
                key={`category-card-color-thumbnail-${idx}`}
                skill={skill}
              />
              <SkillName type="caption1" color={palette.Gray[40]}>
                {skill}
              </SkillName>
            </>
          ))}
        </>
      ) : (
        <>
          <ColorThumbnail skill="ALL" />
          <SkillName type="caption1" color={palette.Gray[40]}>
            ALL
          </SkillName>
        </>
      )}
    </SkillSetContainer>
  )
}

const SkillSetContainer = styled(Flex)``

const SkillName = styled(Typo)`
  margin-right: ${pxToRem(8)}rem;
`

export default SkillChips
