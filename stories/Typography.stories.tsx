import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Typo from '../foundation/typography'

export default {
  title: 'Typography',
  component: Typo,
} as ComponentMeta<typeof Typo>

const Template: ComponentStory<typeof Typo> = (args) => <Typo {...args} />

export const Display_01 = Template.bind({})
Display_01.args = {
  Component: 'div',
  type: 'display1',
  children: 'Display 01',
}

export const Display_02 = Template.bind({})
Display_02.args = {
  Component: 'div',
  type: 'display2',
  children: 'Display 02',
}
export const Header_01 = Template.bind({})
Header_01.args = {
  Component: 'div',
  type: 'header1',
  children: 'Header 1',
}

export const Header_02 = Template.bind({})
Header_02.args = {
  Component: 'div',
  type: 'header2',
  children: 'Header 2',
}

export const Title_01 = Template.bind({})
Title_01.args = {
  Component: 'div',
  type: 'title1',
  children: 'Title 1',
}

export const Title_02 = Template.bind({})
Title_02.args = {
  Component: 'div',
  type: 'title2',
  children: 'Title 2',
}

export const Body_01 = Template.bind({})
Body_01.args = {
  Component: 'div',
  type: 'body1',
  children: 'Body 1',
}

export const Body_02 = Template.bind({})
Body_02.args = {
  Component: 'div',
  type: 'body2',
  children: 'Body 2',
}

export const Caption_01 = Template.bind({})
Caption_01.args = {
  Component: 'div',
  type: 'caption1',
  children: 'Caption 1',
}
