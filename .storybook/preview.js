import { addDecorator } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Initialize MSW
initialize()
//export const decorators = [mswDecorator]

// Provide the MSW addon decorator globally
export const decorators = [
  (Story, context) => (
    <div className="test">
      <Story />
    </div>
  ),
]
addDecorator(mswDecorator)
