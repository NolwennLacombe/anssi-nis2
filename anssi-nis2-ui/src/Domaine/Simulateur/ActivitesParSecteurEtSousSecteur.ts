import {
  Activite,
  ValeursActivitesAdministrationPublique,
  ValeursActivitesConstructionVehiculesAutomobilesRemorquesSemi,
  ValeursActivitesEauPotable,
  ValeursActivitesEauUsees,
  ValeursActivitesElectricite,
  ValeursActivitesEspace,
  ValeursActivitesFabricationAutreMaterielsTransports,
  ValeursActivitesFabricationDispositifsMedicaux,
  ValeursActivitesFabricationEquipementsElectroniques,
  ValeursActivitesFabricationMachinesEquipements,
  ValeursActivitesFabricationProductionDistributionProduitsChimiques,
  ValeursActivitesFabricationProduitsInformatiquesElectroniquesOptiques,
  ValeursActivitesFournisseursNumeriques,
  ValeursActivitesGaz,
  ValeursActivitesGestionDechets,
  ValeursActivitesGestionServicesTic,
  ValeursActivitesHydrogene,
  ValeursActivitesInfrastructureMarcheFinancier,
  ValeursActivitesInfrastructureNumerique,
  ValeursActivitesPetrole,
  ValeursActivitesProductionTransformationDistributionDenreesAlimentaires,
  ValeursActivitesRecherche,
  ValeursActivitesReseauxChaleurFroid,
  ValeursActivitesSante,
  ValeursActivitesSecteurBancaire,
  ValeursActivitesServicesPostauxExpedition,
  ValeursActivitesTransportsAeriens,
  ValeursActivitesTransportsFerroviaires,
  ValeursActivitesTransportsParEaux,
  ValeursActivitesTransportsRoutiers,
} from "./Activite.ts";
import { ValeurCleSectorielle } from "./ChampsSimulateur";

export const activitesParSecteurEtSousSecteur: Record<
  ValeurCleSectorielle,
  readonly Activite[]
> = {
  administrationPublique: ValeursActivitesAdministrationPublique,
  autreSecteurActivite: [],
  autreSousSecteurEnergie: [],
  autreSousSecteurFabrication: [],
  autreSousSecteurTransport: [],
  banqueSecteurBancaire: ValeursActivitesSecteurBancaire,
  constructionVehiculesAutomobiles:
    ValeursActivitesConstructionVehiculesAutomobilesRemorquesSemi,
  eauPotable: ValeursActivitesEauPotable,
  eauxUsees: ValeursActivitesEauUsees,
  electricite: ValeursActivitesElectricite,
  espace: ValeursActivitesEspace,
  fabricationAutresMaterielTransports:
    ValeursActivitesFabricationAutreMaterielsTransports,
  fabricationDispositifsMedicaux:
    ValeursActivitesFabricationDispositifsMedicaux,
  fabricationEquipementsElectroniques:
    ValeursActivitesFabricationEquipementsElectroniques,
  fabricationFabricationProduitsInformatiquesElectroniquesOptiques:
    ValeursActivitesFabricationProduitsInformatiquesElectroniquesOptiques,
  fabricationMachinesEquipements:
    ValeursActivitesFabricationMachinesEquipements,
  fabricationProductionDistributionProduitsChimiques:
    ValeursActivitesFabricationProductionDistributionProduitsChimiques,
  fournisseursNumeriques: ValeursActivitesFournisseursNumeriques,
  gaz: ValeursActivitesGaz,
  gestionDechets: ValeursActivitesGestionDechets,
  gestionServicesTic: ValeursActivitesGestionServicesTic,
  hydrogene: ValeursActivitesHydrogene,
  infrastructureMarchesFinanciers:
    ValeursActivitesInfrastructureMarcheFinancier,
  infrastructureNumerique: ValeursActivitesInfrastructureNumerique,
  petrole: ValeursActivitesPetrole,
  productionTransformationDistributionDenreesAlimentaires:
    ValeursActivitesProductionTransformationDistributionDenreesAlimentaires,
  recherche: ValeursActivitesRecherche,
  reseauxChaleurFroid: ValeursActivitesReseauxChaleurFroid,
  sante: ValeursActivitesSante,
  servicesPostauxExpedition: ValeursActivitesServicesPostauxExpedition,
  transportsAeriens: ValeursActivitesTransportsAeriens,
  transportsFerroviaires: ValeursActivitesTransportsFerroviaires,
  transportsParEau: ValeursActivitesTransportsParEaux,
  transportsRoutiers: ValeursActivitesTransportsRoutiers,
};
export type AssociationSectorielleActivite = {
  secteurOuSousSecteur: ValeurCleSectorielle;
  titreActivite: string;
};
