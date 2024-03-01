import { StoryFn, Meta } from "@storybook/react";
import Input from ".";

export default {
  title: "Example/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
  <div className="m-8">
    <Input placeholder="fill your password" {...args} />
  </div>
);

export const InputComponents = Template.bind({});
InputComponents.args = {};
