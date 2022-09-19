import styled from '@emotion/styled'

import { GraphPartVariant, GraphType, SkillChoose } from './constants'
import GraphPart from './GraphPart'

const NUMBER_OF_PARTS = 7

/**
 * @interface
 * @param ratio {number} (가로 길이) / (세로 길이)
 */

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  ratio: number
  type: GraphType
  skills: SkillChoose[]
}

const skillPositionMapper = {
  [GraphType.I]: [0],
  [GraphType.T]: [3, 2, 4, 1, 5, 0, 6],
  [GraphType.Pi]: [2, 4, 3, 1, 5, 0, 6],
}
const partVariantMapper: Record<GraphType, GraphPartVariant[]> = {
  [GraphType.I]: [
    GraphPartVariant.small,
    GraphPartVariant.small,
    GraphPartVariant.small,
    GraphPartVariant.big,
    GraphPartVariant.small,
    GraphPartVariant.small,
    GraphPartVariant.small,
  ],
  [GraphType.T]: [
    GraphPartVariant.small,
    GraphPartVariant.small,
    GraphPartVariant.small,
    GraphPartVariant.big,
    GraphPartVariant.small,
    GraphPartVariant.small,
    GraphPartVariant.small,
  ],
  [GraphType.Pi]: [
    GraphPartVariant.small,
    GraphPartVariant.small,
    GraphPartVariant.big,
    GraphPartVariant.small,
    GraphPartVariant.big,
    GraphPartVariant.small,
    GraphPartVariant.small,
  ],
}

const Graph = ({ type, skills, ...rest }: Props) => {
  return (
    <Container {...rest}>
      {skills.map(
        (skill, index) =>
          skill !== SkillChoose.Choose && (
            <GraphPart variant={partVariantMapper[type][index]} skill={skill} />
          )
      )}
    </Container>
  )
}

const Container = styled.div<{ ratio: number }>`
  display: flex;
  flex-direction: row;
  aspect-ratio: ${({ ratio }) => ratio};
  justify-content: space-evenly;
`

export default Graph
