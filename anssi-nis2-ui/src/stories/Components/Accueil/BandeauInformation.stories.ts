import type { Meta, StoryObj } from "@storybook/react";
import { BandeauInformationRS } from "../../../Components/Accueil";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BandeauInformationRS> = {
  component: BandeauInformationRS,
};

export default meta;
type Story = StoryObj<typeof BandeauInformationRS>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
