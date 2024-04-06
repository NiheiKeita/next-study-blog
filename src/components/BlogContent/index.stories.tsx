import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { BlogContent } from '.';


const meta: Meta<typeof BlogContent> = {
  title: 'views/BlogContent',
  component: BlogContent,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return <BlogContent />
  },
};