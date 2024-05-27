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
      description: "이벤트 함수",
      table: {
        type: { summary: "() => void" },
      },
    },
    children: {
      description: "버튼에 들어갈 내용",
    },
    outline: {
      description: "outline 추가 여부(default는 지원 안함)",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    size: {
      description: "버튼 사이즈",
      table: {
        defaultValue: {
          summary: "small",
        },
        type: {
          summary: "string",
        },
      },
    },
    color: {
      description: "버튼 색상",
      control: { type: "radio" },
      table: {
        defaultValue: {
          summary: "null",
        },
        type: {
          summary: "string",
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
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    outline: false,
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    color: "primary",
    outline: false,
  },
  parameters: {
    controls: { include: ["children", "outline", "size"], exclude: ["color"] },
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    color: "secondary",
    outline: false,
  },
  parameters: {
    controls: { include: ["children", "outline", "size"], exclude: ["color"] },
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
  parameters: {
    controls: {
      include: ["children", "size"],
      exclude: ["color", "outline"],
    },
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    color: "success",
  },
  parameters: {
    controls: { include: ["children", "size"], exclude: ["color"] },
  },
};

export const Failure: Story = {
  args: {
    children: "Button",
    color: "failure",
  },
  parameters: {
    controls: { include: ["children", "size"], exclude: ["color"] },
  },
};
