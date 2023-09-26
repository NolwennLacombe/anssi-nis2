import type { Meta, StoryObj } from "@storybook/react";
import { Etape1Localisation } from "../../../Components/Simulateur";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import {
  CollectionParametresDonnees,
  ParametresDonneesSpecifiqueField,
} from "../../utilitaires/parametresFormulaire.ts";
import { donneesFormulaireSimulateurVide } from "../../../Services/Simulateur/donneesFormulaire.ts";
import { ValeursClePaysUnionEuropeenne } from "../../../Domaine/Simulateur/ValeursCles.ts";
import { paysUnionEuropeenneLocalisation } from "../../../Domaine/Simulateur/Libelles.ts";

class ParametresDonneesEtatMembre extends ParametresDonneesSpecifiqueField<ValeursClePaysUnionEuropeenne> {
  protected construitDonnees<ValeursClePaysUnionEuropeenne>(
    listeEtatsMembres: ValeursClePaysUnionEuropeenne[],
  ) {
    return this.construitDonneesPourField("etatMembre", listeEtatsMembres);
  }
}

class CollectionParametresDonneesEtatMembre extends CollectionParametresDonnees<ParametresDonneesEtatMembre> {}

const donneesFormulaireOptions: CollectionParametresDonneesEtatMembre =
  new CollectionParametresDonneesEtatMembre(
    new ParametresDonneesEtatMembre("France Uniquement", ["france"]),
    new ParametresDonneesEtatMembre("France et autre", ["france", "autre"]),
    new ParametresDonneesEtatMembre("France et Hors UE", ["france", "horsue"]),
    new ParametresDonneesEtatMembre("Tous", ["france", "autre", "horsue"]),
    new ParametresDonneesEtatMembre("Autre et Hors UE", ["autre", "horsue"]),
    new ParametresDonneesEtatMembre("Autre Uniquement", ["autre"]),
    new ParametresDonneesEtatMembre("Hors UE Uniquement", ["horsue"]),
  );

const meta: Meta<typeof Etape1Localisation> = {
  component: Etape1Localisation,
  argTypes: {
    propageActionSimulateur: { action: true },
    formData: donneesFormulaireOptions.getFormData(), //CollectionParametresDonneesEtatMembre
  },
};

export default meta;
type Story = StoryObj<typeof Etape1Localisation>;

const creeActionPropagationFormulaireSimu = (newValue: string) => {
  const actionTypique = {
    type: "checkMulti",
    name: "etatMembre",
  };
  return {
    ...actionTypique,
    newValue: newValue,
  };
};

export const CliqueSurLesOptions: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const { propageActionSimulateur } = args;

    const optionsATester = [
      {
        libelle: paysUnionEuropeenneLocalisation["france"],
        newValue: "france",
      },
      { libelle: paysUnionEuropeenneLocalisation["autre"], newValue: "autre" },
      {
        libelle: paysUnionEuropeenneLocalisation["horsue"],
        newValue: "horsue",
      },
    ];

    for (const { libelle, newValue } of optionsATester) {
      const actionPropagee = creeActionPropagationFormulaireSimu(newValue);
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

export const CocheFrance: Story = {
  args: {
    formData: {
      ...donneesFormulaireSimulateurVide,
      etatMembre: ["france"],
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    step("Il y a 3 cases à cocher", async () =>
      expect((await canvas.findAllByRole("checkbox")).length).toBe(3),
    );
    step("Seule la case France est cochée", async () => {
      const casesCochees = await canvas.findAllByRole("checkbox", {
        checked: true,
      });
      await expect(casesCochees.length).toBe(1);

      await expect(casesCochees[0].getAttribute("value")).toBe("france");
    });
  },
};

export const CocheFranceEtHorsUE: Story = {
  args: {
    formData: {
      ...donneesFormulaireSimulateurVide,
      etatMembre: ["france", "horsue"],
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    step("Il y a 3 cases à cocher", async () =>
      expect((await canvas.findAllByRole("checkbox")).length).toBe(3),
    );
    step("Seule la case France est cochée", async () => {
      const casesCochees = await canvas.findAllByRole("checkbox", {
        checked: true,
      });
      await expect(casesCochees.length).toBe(2);

      await expect(casesCochees[0].getAttribute("value")).toBe("france");
      await expect(casesCochees[1].getAttribute("value")).toBe("horsue");
    });
  },
};
