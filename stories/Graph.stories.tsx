import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import GraphPart from '../components/Graph/GraphPart'

export default {
  title: 'GraphPart',
  component: GraphPart,
} as ComponentMeta<typeof GraphPart>

const Template: ComponentStory<typeof GraphPart> = (args) => (
  <GraphPart {...args} />
)

export const UXD_big = Template.bind({})
UXD_big.args = {
  variant: 'big',
  skill: 'UXD',
}

export const BXD_small = Template.bind({})
BXD_small.args = {
  variant: 'small',
  skill: 'BXD',
}
