import { Meta, StoryObj } from "@storybook/react/*";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  args: {},
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      description: "contents",
      table: {
        type: { summary: "string" },
      },
    },
    fontWeight: {
      description: "font-weight",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "normal",
        },
      },
    },
    size: {
      description: "font-size",
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "small",
        },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Text1: Story = {
  args: {
    children: "Text",
    size: "largest",
    fontWeight: "black",
  },
};
export const Text2: Story = {
  args: {
    children: "Title",
    size: "larger",

    fontWeight: "extra-bold",
  },
};
export const Text3: Story = {
  args: {
    children: "Title",
    size: "large",

    fontWeight: "bold",
  },
};
export const Text4: Story = {
  args: {
    children: "Title",
    size: "medium",

    fontWeight: "semi-bold",
  },
};
export const Text5: Story = {
  args: {
    children: "Title",
    size: "small",

    fontWeight: "normal",
  },
};
