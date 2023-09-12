import {
  CollectionParametresDonnees,
  ParametresDonneesSpecifiqueField,
} from "../../utilitaires/parametresFormulaire.ts";
import { ValeursTypeStructure } from "../../../Domaine/DomaineSimulateur.ts";
import { SimulateurFormData } from "../../../Services/simulateurFrontServices.ts";
import { SimulateurEtape2 } from "../../../Components/Simulateur";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

class ParametresDonneesTypeStructure extends ParametresDonneesSpecifiqueField<ValeursTypeStructure> {
  protected construitDonnees<ValeursTypeStructure>(
    valeurs: ValeursTypeStructure[],
  ): SimulateurFormData {
    return this.construitDonneesPourField("typeStructure", valeurs);
  }
}

class CollectionParametresDonneesTypeStructure extends CollectionParametresDonnees<ParametresDonneesTypeStructure> {}

const donneesFormulaireOptions: CollectionParametresDonneesTypeStructure =
  new CollectionParametresDonneesTypeStructure();

const meta: Meta<typeof SimulateurEtape2> = {
  component: SimulateurEtape2,
  argTypes: {
    propageActionSimulateur: { action: true },
    formData: donneesFormulaireOptions.getFormData(),
  },
};

export default meta;
type Story = StoryObj<typeof SimulateurEtape2>;

const creeActionPropagationFormulaireActivite = (
  newValue: ValeursTypeStructure,
) => {
  const actionTypique = {
    type: "checkSingle",
    name: "typeStructure",
  };
  return { ...actionTypique, newValue: newValue };
};

export const CliqueSurLesOptions: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const { propageActionSimulateur } = args;

    const optionsATester: {
      libelle: string;
      newValue: ValeursTypeStructure;
    }[] = [
      {
        libelle: "Publique",
        newValue: "publique",
      },
    ];

    for (const { libelle, newValue } of optionsATester) {
      const actionPropagee = creeActionPropagationFormulaireActivite(newValue);
      await step(
        `Clique sur '${libelle}' déclanche le dispatch d'action '${actionPropagee.type}' sur le champs '${actionPropagee.name}' pour une valeur '${newValue}'`,
        async () => {
          await userEvent.click(await canvas.findByText(libelle));
          await expect(propageActionSimulateur).toHaveBeenCalledWith(
            actionPropagee,
          );
        },
      );
    }
  },
};
