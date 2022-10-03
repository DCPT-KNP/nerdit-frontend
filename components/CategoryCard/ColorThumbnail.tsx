import styled from '@emotion/styled'

import { Skill, SkillColorMap } from '../../constants/skills'
import pxToRem from '../../utils/pxToRem'

const ColorThumbnail = styled.div<{ skill: Skill | 'ALL' }>`
  margin-right: ${pxToRem(6)}rem;
  width: ${pxToRem(4)}rem;
  height: ${pxToRem(10)}rem;
  background-color: ${({ skill }) =>
    skill === 'ALL' ? '#000' : SkillColorMap[skill]};
`

export default ColorThumbnail
