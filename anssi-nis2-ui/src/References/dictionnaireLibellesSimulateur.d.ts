import {
  DesignationOperateurServicesEssentiels,
  AppartenancePaysUnionEuropeenne,
  TrancheChiffreAffaire,
  TrancheNombreEmployes,
  TypeStructure,
} from "../Domaine/Simulateur/ValeursChampsSimulateur.ts";
import { SecteurActivite } from "../Domaine/Simulateur/SecteursActivite";

import { SousSecteurActivite } from "../Domaine/Simulateur/SousSecteurs";
import { Activite } from "../Domaine/Simulateur/Activite.ts";

export type DictionnaireLibellesSimulateur = {
  activites: Record<Activite, string>;
  designeOperateurServicesEssentiels: Record<
    DesignationOperateurServicesEssentiels,
    string
  >;
  etatMembre: Record<AppartenancePaysUnionEuropeenne, string>;
  secteurActivite: Record<SecteurActivite, string>;
  sousSecteurActivite: Record<SousSecteurActivite, string>;
  trancheCA: Record<TrancheChiffreAffaire, string>;
  trancheNombreEmployes: Record<TrancheNombreEmployes, string>;
  typeStructure: Record<TypeStructure, string>;
};
