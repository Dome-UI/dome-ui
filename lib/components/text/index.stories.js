import { Text } from "@lib/components/text";

export default {
  title: "Components/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const TextComponent = Template.bind({});

TextComponent.args = {
  label: "Text default",
};
