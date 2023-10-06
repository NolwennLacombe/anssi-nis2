import {
  CollectionParametresDonnees,
  ParametresDonneesSpecifiqueField,
} from "../../utilitaires/parametresFormulaire.ts";
import { EtapeSecteurActivite } from "../../../Components/Simulateur";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { DonneesFormulaireSimulateur } from "../../../Domaine/Simulateur/DonneesFormulaire.ts";
import { TValeursSecteursActivites } from "../../../Domaine/Simulateur/ValeursCles.ts";

class ParametresDonneesSecteurActivite extends ParametresDonneesSpecifiqueField<TValeursSecteursActivites> {
  protected construitDonnees<ValeursSecteurActivite>(
    valeurs: ValeursSecteurActivite[],
  ): DonneesFormulaireSimulateur {
    return this.construitDonneesPourField("secteurActivite", valeurs);
  }
}

class CollectionParametresDonneesSecteurActivites extends CollectionParametresDonnees<ParametresDonneesSecteurActivite> {}

const donneesFormulaireOptions: CollectionParametresDonneesSecteurActivites =
  new CollectionParametresDonneesSecteurActivites();

const meta: Meta<typeof EtapeSecteurActivite> = {
  component: EtapeSecteurActivite,
  argTypes: {
    propageActionSimulateur: { action: true },
    donneesFormulaire: donneesFormulaireOptions.getFormData(),
  },
};

export default meta;
type Story = StoryObj<typeof EtapeSecteurActivite>;

const creeActionPropagationFormulaireActivite = (
  newValue: TValeursSecteursActivites,
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
      newValue: TValeursSecteursActivites;
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
