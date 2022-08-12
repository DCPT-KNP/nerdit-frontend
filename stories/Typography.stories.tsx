import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Typo from '../components/Typo'

export default {
  title: 'Typography',
  component: Typo,
} as ComponentMeta<typeof Typo>

const Template: ComponentStory<typeof Typo> = (args) => <Typo {...args} />

export const Primary = Template.bind({})

Primary.args = {
  Component: 'div',
  type: 'H',
  children: 'asdf',
}
