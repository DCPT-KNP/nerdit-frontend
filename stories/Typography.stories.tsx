import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Typo from '../components/Typo'

export default {
  title: 'Typography',
  component: Typo,
} as ComponentMeta<typeof Typo>

const Template: ComponentStory<typeof Typo> = (args) => <Typo {...args} />

export const Headline = Template.bind({})

Headline.args = {
  Component: 'div',
  type: 'H',
  children: 'Heading',
}

export const SubHeadline = Template.bind({})

SubHeadline.args = {
  Component: 'div',
  type: 'SH',
  children: 'SubHeadline',
}
export const Title1 = Template.bind({})

Title1.args = {
  Component: 'div',
  type: 'T1',
  children: 'Title1',
}

export const Title2 = Template.bind({})

Title2.args = {
  Component: 'div',
  type: 'T2',
  children: 'Title2',
}

export const Title3 = Template.bind({})

Title3.args = {
  Component: 'div',
  type: 'T3',
  children: 'Title3',
}

export const SubTitle1 = Template.bind({})

SubTitle1.args = {
  Component: 'div',
  type: 'S1',
  children: 'SubTitle1',
}

export const SubTitle2 = Template.bind({})

SubTitle2.args = {
  Component: 'div',
  type: 'S2',
  children: 'SubTitle2',
}

export const Body1 = Template.bind({})

Body1.args = {
  Component: 'div',
  type: 'B1',
  children: 'Body1',
}

const Styled = styled(Typo)`
  color: #ff0000;
  font-style: italic;
`

export const StyledText = () => <Styled type="B1">styled</Styled>

export const CssPropText = () => (
  <Typo
    type="B1"
    css={css`
      color: #00ff00;
      text-decoration: underline;
    `}
  >
    css prop
  </Typo>
)
