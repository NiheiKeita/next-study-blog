import { Meta, StoryObj } from '@storybook/react';
import { BlogList } from '.';


const meta: Meta<typeof BlogList> = {
  title: 'views/BlogList',
  component: BlogList,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return <BlogList notionPosts={[]} />
  },
};