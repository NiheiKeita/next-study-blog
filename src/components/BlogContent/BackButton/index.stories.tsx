import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { BackButton } from '.';


const meta: Meta<typeof BackButton> = {
  title: 'views/BlogContent/BackButton',
  component: BackButton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return <BackButton />
  },
};