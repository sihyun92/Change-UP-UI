import { Meta, StoryObj } from "@storybook/react/*";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "password",
    placeholder: '입력하세요!',
  },
};