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