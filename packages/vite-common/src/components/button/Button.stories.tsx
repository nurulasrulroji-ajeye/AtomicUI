import { StoryFn, Meta } from "@storybook/react";
import Button from ".";

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <div className="m-8">
    <Button {...args}>Test</Button>
  </div>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  variant: "base",
};
