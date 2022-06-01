import { Input } from "@lib/components/input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const InputOnly = Template.bind({});
export const LabelInput = Template.bind({});
export const SupportText = Template.bind({});
export const IconsInside = Template.bind({});
export const IconsOutside = Template.bind({});
export const BorderLineBottom = Template.bind({});

InputOnly.args = {};

LabelInput.args = {
  label: "Label here",
};

SupportText.args = {
  label: "Label here",
  supportText: "Support text here",
};

IconsInside.args = {
  label: "Label here",
  iconInsideLeft: "FaArrowsAlt",
  iconInsideRight: "FaArrowsAlt",
};

IconsOutside.args = {
  label: "Label here",
  iconOutsideLeft: "FaArrowsAlt",
  iconOutsideRight: "FaArrowsAlt",
};

BorderLineBottom.args = {
  borderLineBottom: true,
};
