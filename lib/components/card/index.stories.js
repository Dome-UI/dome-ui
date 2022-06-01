import { Card } from "@lib/components/card";

export default {
  title: "Components/Cells/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardComplexInteractions = Template.bind({});
export const CardOnlyTitle = Template.bind({});
export const CardOnlyReadMore = Template.bind({});
export const CardOnlyButtonsDescription = Template.bind({});
export const CardMenuSup = Template.bind({});
export const CardMenuSub = Template.bind({});

CardComplexInteractions.args = {
  title: "Write your title",
  imageUrl:
    "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png",
  buttonLeftTitle: "ArrowsAlt",
  buttonRightTitle: "Bars",
  description: true,
  descriptionText: "Lorem ipsum",
  buttonReadMore: true,
  buttonLeftDescription: "ArrowsAlt",
  buttonRightDescription: "ArrowsAlt",
};

CardOnlyTitle.args = {
  title: "ASDASD",
  imageUrl:
    "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png",
};

CardOnlyReadMore.args = {
  title: "ASDASD",
  imageUrl:
    "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png",
  buttonReadMore: true,
  description: true,
  descriptionText: "Lorem ipsum",
};

CardOnlyButtonsDescription.args = {
  title: "Write your title",
  imageUrl:
    "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png",
  buttonLeftDescription: "ArrowsAlt",
  buttonRightDescription: "ArrowsAlt",
};

CardMenuSup.args = {
  title: "Write your title",
  imageUrl:
    "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png",
  buttonLeftTitle: "ArrowsAlt",
  buttonRightTitle: "Bars",
};

CardMenuSub.args = {
  title: "Write your title",
  imageUrl:
    "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png",
  description: true,
  descriptionText: "Lorem ipsum",
  buttonReadMore: true,
  buttonLeftDescription: "ArrowsAlt",
  buttonRightDescription: "ArrowsAlt",
};
