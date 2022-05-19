import { Button } from '@lib/components/button';

// Nome do menu lateral (Categoria) 
export default { 
  title: "Components/Button",
  component: Button,
}

const Template = args => <Button {...args} />

// Variações dentro de "Button" (Cria um novo sub-menu lateral). 
export const Default = Template.bind({})
export const IconLeft = Template.bind({})
export const IconRight = Template.bind({})
export const OnlyIcon = Template.bind({})

// Propriedades de cada variação
Default.args = {
  label: "Press me",
  backgroundColor: "#F6BE27",
  color: "#242424",
  border: "small",
  buttonSize: "medium",
}

IconLeft.args = {
  label: "Press me",
  backgroundColor: "#F6BE27",
  color: "#242424",
  border: "small",
  buttonSize: "medium",
  iconLeft: "FaArrowLeft"
}

IconRight.args = {
  label: "Press me",
  backgroundColor: "#F6BE27",
  color: "#242424",
  border: "small",
  buttonSize: "medium",
  IconRight: "ArrowRight"
}

OnlyIcon.args = {
  backgroundColor: "#F6BE27",
  color: "#242424",
  border: "full",
  buttonSize: "circle",
  IconCenter: "ArrowUp"
}