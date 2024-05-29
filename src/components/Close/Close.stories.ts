import { Meta, StoryObj } from "@storybook/react/*";
import Close from "./Close";

const meta: Meta<typeof Close> = {
  component: Close,
  args: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Close>;

export const CloseButton: Story = {};
