import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import NavigatorTabGroup from '../foundation/NavigatorTabGroup'

export default {
  title: 'Navigator Tab',
  component: NavigatorTabGroup,
} as ComponentMeta<typeof NavigatorTabGroup>

export const Preview = () => (
  <NavigatorTabGroup
    childProps={[
      { children: 'Shape Modal' },
      { children: 'Primary Skill' },
      { children: 'Secondary Skill' },
      { children: 'ETC Skill' },
      { children: 'Final Model' },
    ]}
    activeIndex={2}
  />
)

const Template: ComponentStory<typeof NavigatorTabGroup> = (args) => (
  <NavigatorTabGroup {...args} />
)

export const Playground = Template.bind({})
Playground.args = {
  childProps: [
    { children: 'Shape Modal' },
    { children: 'Primary Skill' },
    { children: 'Secondary Skill' },
    { children: 'ETC Skill' },
    { children: 'Final Model' },
  ],
  activeIndex: 0,
}
