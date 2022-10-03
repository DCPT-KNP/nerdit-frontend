import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import CareerShapeChooseButton from '../components/CareerShapeChooseButton'
import Flex from '../components/Flex'
import { CareerShape } from '../constants/careerShapes'

const CareerShapeArray = Object.values(CareerShape)

export default {
  title: 'Career Shape Choose Button',
  component: CareerShapeChooseButton,
} as ComponentMeta<typeof CareerShapeChooseButton>

export const Preview = () => (
  <>
    <Flex flexDirection="column" alignItems="flex-start">
      {CareerShapeArray.map((career, i) => (
        <CareerShapeChooseButton
          key={i}
          selected={i === 1}
          careerShape={career}
        />
      ))}
    </Flex>
  </>
)

const Template: ComponentStory<typeof CareerShapeChooseButton> = (args) => (
  <CareerShapeChooseButton {...args} />
)

export const Playground = Template.bind({})
Playground.args = {
  careerShape: CareerShapeArray[0],
}
