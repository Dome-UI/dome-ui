import { Button } from '@lib/components/button';

export default { 
  title: "Components/Molecules/Button",
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
export const IconLeft = Template.bind({})
export const IconRight = Template.bind({})
export const OnlyIcon = Template.bind({})

Default.args = {
  label: "Press me",
}

IconLeft.args = {
  label: "Press me",
  iconLeft: "FaArrowLeft"
}

IconRight.args = {
  label: "Press me",
  IconRight: "ArrowRight"
}

OnlyIcon.args = {
  border: "full",
  buttonSize: "circle",
  IconCenter: "ArrowUp"
}