import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Button from '../components/Button'
import { ButtonVariant } from '../components/Button/constants'
import Flex from '../components/Flex'

const ButtonVariantArray = Object.values(ButtonVariant)

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Preview = () => (
  <>
    <Flex flexDirection="column" alignItems="flex-start">
      {ButtonVariantArray.map((variant, index) => (
        <Button variant={variant} key={index}>
          {variant}
        </Button>
      ))}
      {ButtonVariantArray.map((variant, index) => (
        <Button variant={variant} key={index} disabled>
          {variant}
        </Button>
      ))}
    </Flex>
  </>
)

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Playground = Template.bind({})
Playground.args = {
  variant: ButtonVariantArray[0],
  children: ButtonVariantArray[0],
}
