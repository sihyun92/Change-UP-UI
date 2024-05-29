import { Meta, StoryObj } from "@storybook/react/*";
// import { fn } from "@storybook/test";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  args: {},
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

export const Default: Story = {
  args: {
    children: "기본 메시지",
    backgroundColor: "default-bg",
    border: "default-border",
    visibleClose: true,
    shadow: true,
  },
};

export const Message: Story = {
  args: {
    children: "완료되었습니다!",
    backgroundColor: "message-bg",
    border: "message-border",
  },
};

export const Warning: Story = {
  args: {
    children: "경고!",
    backgroundColor: "warning-bg",
    border: "warning-border",
  },
};

export const Error: Story = {
  args: {
    children: "오류!",
    backgroundColor: "error-bg",
    border: "error-border",
  },
};
