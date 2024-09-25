import { Meta, StoryObj } from "@storybook/react/*";
import Button from "./Button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  args: { onClick: fn() },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      description: "event function",
      table: {
        type: { summary: "() => void" },
      },
    },
    children: {
      description: "content",
      table: {
        type: {
          summary: "string | ReactNode",
        },
      },
    },
    disabled: {
      description: "disabled",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    color: {
      description: "font color(hex | rgb | rgba | color-name)",
      control: { type: "color" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    background: {
      description: "background color(hex | rgb | rgba | color-name)",
      control: { type: "color" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    fontSize: {
      description: "font size(px | em | rem)",
    },
    padding: {
      description: "padding(px | em | rem)",
    },
    radius: {
      description: "button radius(px | em | rem)",
    },
    shape: {
      description: "button shape",
      control: { type: "radio" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    border: {
      description: "border",
    },
    shadow: {
      description: "shadow",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Custom: Story = {
  args: {
    children: "Button",
    buttonOutline: false,
    disabled: false,
    shadow: true,
    fontSize: "14px",
    padding: "16px 24px",
    background: "black",
    color: "white",
    radius: "",
    border: "none",
    disabledBackground: "gray",
    disabledColor: "#000",
    disabledBorder: "none",
    hoverBackground: "blue",
    hoverColor: "#fff",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    buttonOutline: false,
    disabled: false,
    buttonColor: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    buttonOutline: false,
    disabled: false,
    buttonColor: "secondary",
  },
};

export const Failure: Story = {
  args: {
    children: "Button",
    buttonOutline: false,
    disabled: false,
    buttonColor: "failure",
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    buttonOutline: false,
    disabled: false,
    buttonColor: "success",
  },
};

export const Cancel: Story = {
  args: {
    children: "Button",
    buttonOutline: false,
    disabled: false,
    buttonColor: "cancel",
  },
};
