import { EnvoieDonneesFormulaire } from "./Simulateur/Operations/appelsApi";
import { DonneesFormulaireSimulateur } from "../Domaine/Simulateur/DonneesFormulaire.ts";
import { SimulateurDonneesFormulaireActions } from "./Simulateur/Props/donneesFormulaire";
import { BoutonsNavigation } from "./Simulateur/Props/boutonsNavigation.d.ts";
import { ActionsBoutonNavigation } from "./Simulateur/Reducteurs.ts";
import { Reducer } from "react";

export type Contexte = {
  envoieDonneesFormulaire: EnvoieDonneesFormulaire;
  simulateur: {
    reducteurDonneesFormulaire: Reducer<
      DonneesFormulaireSimulateur,
      SimulateurDonneesFormulaireActions
    >;
    reducteurActionsBoutonNavigation: Reducer<
      BoutonsNavigation,
      ActionsBoutonNavigation
    >;
  };
};
