import { Meta, Story } from '@storybook/react'
import { rest } from 'msw'
import React from 'react'

import { Test, testUrl } from './'

export default {
  title: 'Test',
  component: Test,
} as Meta

const Template: Story = (args) => {
  return <Test />
}

export const TestStory = Template.bind({})
TestStory.storyName = 'Test'
TestStory.args = {}
TestStory.parameters = {
  msw: {
    handlers: [
      rest.get(`${testUrl}/users`, (req, res, ctx) => {
        console.log('get msw')

        return res(
          ctx.json([
            {
              id: 1234,
              name: 'minhyup',
              username: 'username minhyup',
            },
          ])
        )
      }),
    ],
  },
}
