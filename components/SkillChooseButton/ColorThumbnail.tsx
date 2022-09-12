import styled from '@emotion/styled'

import { Skill, SkillColorMap } from '../../constants/skills'
import pxToRem from '../../utils/pxToRem'

const ColorThumbnail = styled.div<{ skill: Skill }>`
  width: ${pxToRem(6)}rem;
  height: ${pxToRem(21)}rem;
  background-color: ${({ skill }) => SkillColorMap[skill]};
`

export default ColorThumbnail
