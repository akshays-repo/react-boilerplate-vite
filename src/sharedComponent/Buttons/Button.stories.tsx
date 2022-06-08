import { ComponentStory, ComponentMeta } from '@storybook/react'
import AppButton from './Button.component'

export default {
  title: 'Components/AppButton',
  component: AppButton,
} as ComponentMeta<typeof AppButton>

const Template: ComponentStory<typeof AppButton> = (arg) => (
  <AppButton {...arg} />
)

export const Default = Template.bind({})
