import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react'
import axios from 'axios'
import { rest } from 'msw'
import React, { useEffect } from 'react'

const reqUrl = 'https://jsonplaceholder.typicode.com/users'
const getUser = async () => {
  return (await axios.get(reqUrl)).data
}
const Test = () => {
  useEffect(() => {
    getUser()
  }, [])

  return <div>hi</div>
}

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
      rest.get(reqUrl, (req, res, ctx) => {
        return res(
          ctx.json({
            firstName: 'Neil',
            lastName: 'Maverick',
          })
        )
      }),
    ],
  },
}
