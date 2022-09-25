import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Flex from '../components/Flex'
import RoadMapCard from '../components/RoadMap'
import { RoadMap } from '../constants/roadmap'

const RoadMapArray = Object.values(RoadMap)

export default {
  title: 'Road Map Card',
  component: RoadMapCard,
} as ComponentMeta<typeof RoadMapCard>

export const Preview = () => (
  <Flex flexDirection="column" alignItems="flex-start">
    {RoadMapArray.map((roadmap) => (
      <RoadMapCard roadmap={roadmap} key={roadmap} />
    ))}
  </Flex>
)

const Template: ComponentStory<typeof RoadMapCard> = (args) => (
  <RoadMapCard {...args} />
)

export const Playground = Template.bind({})
Playground.args = {
  roadmap: RoadMapArray[0],
}
