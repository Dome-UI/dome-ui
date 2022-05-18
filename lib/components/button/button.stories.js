

import { Button } from '@lib/components';

export default { 
  title: "Button",
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  label: "Press me",
  backgroundColor: "#F6BE27",
  color: "#242424",
  border: "small",
  buttonSize: "medium"
}