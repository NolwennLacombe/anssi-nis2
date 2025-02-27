import {
  DonneesFormulaireSimulateur,
  NomsChampsSimulateur,
} from "../../../Domaine/Simulateur/DonneesFormulaire.ts";

import { ValeurChampSimulateur } from "../../../Domaine/Simulateur/ValeursChampsSimulateur";

type SimulateurDonneesFormulaireActionType = "checkSingle" | "checkMulti";
export type SimulateurDonneesFormulaireActions = {
  type: SimulateurDonneesFormulaireActionType;
  name: NomsChampsSimulateur;
  newValue: ValeurChampSimulateur;
};
export type ResultatReducteurDonneesSimulateur = [
  DonneesFormulaireSimulateur,
  React.Dispatch<SimulateurDonneesFormulaireActions>,
];
