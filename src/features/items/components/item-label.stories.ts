import { ItemLabel } from "./item-label";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'components/item-label',
    component: ItemLabel,
    tags: ['autodocs'],
} satisfies Meta<typeof ItemLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'sample',
        amount: 1
    }
}

export const LongName: Story = {
    args: {
        label: 'PIC1F1827-IF/DIP',
        amount: 1
    }
}