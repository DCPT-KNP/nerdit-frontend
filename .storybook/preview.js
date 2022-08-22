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
addDecorator(mswDecorator)

// Provide the MSW addon decorator globally
export const decorators = [
  (Story, context) => (
    <div className="test">
      <Story />
    </div>
  ),
]
