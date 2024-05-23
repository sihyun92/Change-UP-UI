import { Meta, StoryObj } from "@storybook/react/*";
import Button from "./Button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    disabled: false,
  },
};
