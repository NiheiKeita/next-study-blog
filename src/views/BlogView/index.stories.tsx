import { Meta, StoryObj } from '@storybook/react';
import  {BlogView}  from '.';


const meta: Meta<typeof BlogView> = {
  title: 'views/BlogView',
  component: BlogView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return <BlogView />
  },
};