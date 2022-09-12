import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Flex from '../components/Flex'
import SkillChooseButton from '../components/SkillChooseButton'
import { Skill } from '../constants/skills'

const SkillArray = Object.values(Skill)

export default {
  title: 'Skill Choose Button',
  component: SkillChooseButton,
} as ComponentMeta<typeof SkillChooseButton>

export const Preview = () => (
  <>
    <Flex flexDirection="column" alignItems="flex-start">
      {SkillArray.map((skill) => (
        <SkillChooseButton
          skill={skill}
          clicked={skill === 'UXW' || skill === 'UID'}
          key={skill}
        />
      ))}
    </Flex>
  </>
)

const Template: ComponentStory<typeof SkillChooseButton> = (args) => (
  <SkillChooseButton {...args} />
)

export const Playground = Template.bind({})
Playground.args = {
  skill: SkillArray[0],
}
