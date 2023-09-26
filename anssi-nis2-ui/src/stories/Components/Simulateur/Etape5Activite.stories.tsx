import type { Meta, StoryObj } from "@storybook/react";
import { Etape5Activite } from "../../../Components/Simulateur";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import {
  CollectionParametresDonnees,
  ParametresDonneesSpecifiqueField,
} from "../../utilitaires/parametresFormulaire.ts";

class ParametresDonneesActivites extends ParametresDonneesSpecifiqueField<string> {
  protected construitDonnees<ValeursActivites>(
    listeValeurs: ValeursActivites[],
  ) {
    return this.construitDonneesPourField("activites", listeValeurs);
  }
}

class CollectionParametresDonneesActivites extends CollectionParametresDonnees<ParametresDonneesActivites> {}

const donneesFormulaireOptions: CollectionParametresDonneesActivites =
  new CollectionParametresDonneesActivites(
    new ParametresDonneesActivites("France Uniquement", ["france"]),
  );

const meta: Meta<typeof Etape5Activite> = {
  component: Etape5Activite,
  argTypes: {
    propageActionSimulateur: { action: true },
    formData: donneesFormulaireOptions.getFormData(),
  },
};

export default meta;
type Story = StoryObj<typeof Etape5Activite>;

const creeActionPropagationFormulaireActivite = (newValue: string) => {
  const actionTypique = {
    type: "checkMulti",
    name: "activites",
  };
  return { ...actionTypique, newValue: newValue };
};

export const CliqueSurLesOptions: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const { propageActionSimulateur } = args;

    const optionsATester = [
      {
        libelle:
          "Entreprise d’électricité remplissant une fonction de fourniture",
        newValue:
          "energie[entrepriseElectriciteRemplissantUneFonctionDeFourniture]",
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

export const AffichageInfobulles: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const elementInfobulle = `Entreprise d’électricité remplissant une fonction de fourniture`;
    // const titreAffiche = "Entreprise d’électricité";
    const contenuAffiche =
      "Je t'indique 0: energie[entrepriseElectriciteRemplissantUneFonctionDeFourniture]";
    await step(
      `Clique sur '${elementInfobulle}' affiche une infobulle`,
      async () => {
        const iconeInformation = await canvas.findByTitle(
          `Informations à propos de l'activité "${elementInfobulle}"`,
        );
        const paragraphe = await canvas.getByText(contenuAffiche);
        const divInfobulle = paragraphe.parentElement?.parentElement?.classList;
        // const blockInfo = await canvas.getAllByText(titreAffiche);

        expect(divInfobulle).toContain("fr-hidden");
        await userEvent.click(iconeInformation);
        expect(divInfobulle).not.toContain("fr-hidden");
      },
    );
  },
};
