import { CanvasObject } from "./Canvas.d.tsx";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { libellesSimulateur as libelles } from "../../References/Libelles.ts";
import { NomsChampsSimulateur } from "../../Domaine/Simulateur/DonneesFormulaire.ts";
import { SecteurActivite } from "../../Domaine/Simulateur/SecteursActivite";

import { SousSecteurActivite } from "../../Domaine/Simulateur/SousSecteurs";
import { Activite } from "../../Domaine/Simulateur/Activite.ts";
import {
  AppartenancePaysUnionEuropeenne,
  DesignationOperateurServicesEssentiels,
  TrancheChiffreAffaire,
  TrancheNombreEmployes,
  TypeStructure,
} from "../../Domaine/Simulateur/ChampsSimulateur";

export const passeEtapeEnCochant = async <
  NomChamp extends
    | DesignationOperateurServicesEssentiels
    | Activite
    | AppartenancePaysUnionEuropeenne
    | SecteurActivite
    | SousSecteurActivite
    | TrancheChiffreAffaire
    | TrancheNombreEmployes
    | TypeStructure,
>(
  canvas: CanvasObject,
  champsACliquer: [NomsChampsSimulateur, NomChamp][],
  suivantActiveApres: number = 0,
) => {
  const boutonSuivant = await canvas.findByRole("button", {
    name: "Suivant",
  });
  for (let i = 0; i < champsACliquer.length; i++) {
    const [champ, valeur] = champsACliquer[i];
    if (suivantActiveApres === 0) {
      expect(boutonSuivant).not.toBeEnabled();
    }
    await userEvent.click(
      await canvas.findByText(
        (libelles[champ] as Record<NomChamp, string>)[valeur],
      ),
    );
  }
  expect(boutonSuivant).toBeEnabled();
  return await userEvent.click(boutonSuivant);
};
