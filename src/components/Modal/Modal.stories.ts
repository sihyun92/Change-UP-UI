import { Meta, StoryObj } from "@storybook/react/*";
// import { fn } from "@storybook/test";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  args: {
    children: "Content",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {};
