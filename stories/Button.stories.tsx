import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args} />
    <Button {...args} />
    <Button {...args} />
  </div>
)

export const OutlinedSmall = Template.bind({})
OutlinedSmall.args = {
  variant: 'outlined_small',
  children: 'outlined',
}
