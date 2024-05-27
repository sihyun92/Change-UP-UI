import { Meta, StoryObj } from "@storybook/react/*";
import Title from "./Title";

const meta: Meta<typeof Title> = {
  component: Title,
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
    titleType: {
      description: "h1 ~ h5",
      table: {
        type: { summary: "string" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Title1: Story = {
  args: {
    children: "Title",
    size: "largest",
    titleType: "h1",
    fontWeight: "black",
  },
};
export const Title2: Story = {
  args: {
    children: "Title",
    size: "larger",
    titleType: "h2",
    fontWeight: "extra-bold",
  },
};
export const Title3: Story = {
  args: {
    children: "Title",
    size: "large",
    titleType: "h3",
    fontWeight: "bold",
  },
};
export const Title4: Story = {
  args: {
    children: "Title",
    size: "medium",
    titleType: "h4",
    fontWeight: "semi-bold",
  },
};
export const Title5: Story = {
  args: {
    children: "Title",
    size: "small",
    titleType: "h5",
    fontWeight: "normal",
  },
};
