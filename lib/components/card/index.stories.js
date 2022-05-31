import { Card } from "@lib/components/card";

export default {
  title: "Components/Cells/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Write your title",
};
