import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Graph from '../components/Graph/Graph'
import GraphPart from '../components/Graph/GraphPart'
import { Skill } from '../constants/skills'

export default {
  title: 'Graph',
  component: Graph,
} as ComponentMeta<typeof Graph>

export const Preview = () => (
  <Graph
    type="T"
    ratio={3}
    skills={[
      Skill.GRD,
      Skill.UXD,
      Skill.IXD,
      Skill.BXD,
      Skill.UID,
      Skill.UXR,
      Skill.UXW,
    ]}
    css={{ width: '300px' }}
  />
)
