import {
  CollectionParametresDonnees,
  ParametresDonneesSpecifiqueField,
} from "../../utilitaires/parametresFormulaire.ts";
import { Etape4Secteur } from "../../../Components/Simulateur";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { DonneesFormulaireSimulateur } from "../../../Services/Simulateur/donneesFormulaire.ts";
import { ValeursSecteurActivite } from "../../../Domaine/Simulateur/ValeursCles.ts";

class ParametresDonneesSecteurActivite extends ParametresDonneesSpecifiqueField<ValeursSecteurActivite> {
  protected construitDonnees<ValeursSecteurActivite>(
    valeurs: ValeursSecteurActivite[],
  ): DonneesFormulaireSimulateur {
    return this.construitDonneesPourField("secteurActivite", valeurs);
  }
}

class CollectionParametresDonneesSecteurActivites extends CollectionParametresDonnees<ParametresDonneesSecteurActivite> {}

const donneesFormulaireOptions: CollectionParametresDonneesSecteurActivites =
  new CollectionParametresDonneesSecteurActivites();

const meta: Meta<typeof Etape4Secteur> = {
  component: Etape4Secteur,
  argTypes: {
    propageActionSimulateur: { action: true },
    formData: donneesFormulaireOptions.getFormData(),
  },
};

export default meta;
type Story = StoryObj<typeof Etape4Secteur>;

const creeActionPropagationFormulaireActivite = (
  newValue: ValeursSecteurActivite,
) => {
  const actionTypique = {
    type: "checkMulti",
    name: "secteurActivite",
  };
  return { ...actionTypique, newValue: newValue };
};

export const CliqueSurLesOptions: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const { propageActionSimulateur } = args;

    const optionsATester: {
      libelle: string;
      newValue: ValeursSecteurActivite;
    }[] = [
      {
        libelle: "Énergie",
        newValue: "energie",
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
