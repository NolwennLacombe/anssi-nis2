import type { Meta, StoryObj } from "@storybook/react";
import { pageDecorator } from "../utilitaires/PageDecorator.tsx";
import Simulateur from "../../Simulateur.tsx";

const meta: Meta<typeof Simulateur> = {
  component: Simulateur,
  decorators: [pageDecorator],
};

export default meta;
type Story = StoryObj<typeof Simulateur>;

export const AffichageSimple: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
