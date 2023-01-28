import React from "react";
import { type Meta, type Story } from "@storybook/react";
import Button, { type Props } from "./Button";

const meta: Meta = {
  title: "Button",
  component: Button,
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};
