import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Spacing from '../foundation/Spacing'
import Typo from '../foundation/typography'
import { TypographyType } from '../foundation/typography/types'

export default {
  title: 'Typography',
  component: Typo,
} as ComponentMeta<typeof Typo>

const data: Record<TypographyType, string> = {
  display1: 'Display 01',
  display2: 'Display 02',
  header1: 'Header 01',
  header2: 'Header 02',
  title1: 'Title 01',
  title2: 'Title 02',
  body1: 'Body 01',
  body2: 'Body 02',
  caption1: 'Caption 01',
} as const

const Template: ComponentStory<typeof Typo> = (args) => <Typo {...args} />

export const Preview = () => (
  <>
    {Object.keys(data).map((type) => (
      <>
        <Typo key={type} type={type as TypographyType}>
          {data[type as TypographyType]}
        </Typo>
        <Spacing rem={1} />
      </>
    ))}
  </>
)

export const Playground = Template.bind({})
Playground.args = {
  type: TypographyType.Display1,
  children: 'Display 01',
}
