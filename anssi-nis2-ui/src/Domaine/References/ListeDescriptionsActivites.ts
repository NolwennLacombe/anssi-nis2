import { DescriptionActivite } from "../Simulateur/DescriptionActivite.ts";
import { Activite } from "../Simulateur/Activite.ts";

export const listeDescriptionsActivites: Record<
  Activite,
  DescriptionActivite[]
> = {
  autreActiviteAdministrationPublique: [],
  autreActiviteConstructionVehiculesAutomobilesRemorquesSemi: [],
  autreActiviteEauPotable: [],
  autreActiviteElectricite: [],
  autreActiviteEspace: [],
  autreActiviteFabricationDispositifsMedicaux: [],
  autreActiviteFabricationEquipementsElectroniques: [],
  autreActiviteFabricationMachinesEquipements: [],
  autreActiviteFabricationProductionDistributionProduitsChimiques: [],
  autreActiviteFabricationProduitsInformatiquesElectroniquesOptiques: [],
  autreActiviteFournisseursNumeriques: [],
  autreActiviteGaz: [],
  autreActiviteGestionDechets: [],
  autreActiviteGestionServicesTic: [],
  autreActiviteHydrogene: [],
  autreActiviteInfrastructureMarcheFinancie: [],
  autreActiviteInfrastructureNumerique: [],
  autreActivitePetrole: [],
  autreActiviteProductionTransformationDistributionDenreesAlimentaires: [],
  autreActiviteReseauxChaleurFroid: [],
  autreActiviteSante: [],
  autreActiviteSecteurBancaire: [],
  autreActiviteServicesPostauxExpedition: [],
  autreActiviteTransportsAeriens: [],
  autreActiviteTransportsFerroviaires: [],
  autreActiviteTransportsParEaux: [],
  autreActiviteTransportsRoutiers: [],
  acteurDuMarche: [],
  administrationPouvoirsPublicsCentraux: [],
  administrationPubliqueNiveauRegional: [],
  autoritesRoutieresControleGestionCirculation: [],
  collectantEvacuantTraitantEaux: [],
  constructionAeronautiqueSpatiale: [],
  constructionBateauxNaviresMilitaires: [],
  constructionBateauxPlaisance: [],
  constructionLocomotivesAutreMaterielFerroviaireRoulant: [],
  constructionNavale: [],
  constructionNaviresStructuresFlottantesCiviles: [],
  constructionVehiculeMilitaireCombat: [],
  constructionVehiculesAutomobiles: [],
  contrepartieCentrales: [],
  entiteCentralesStockage: [],
  entiteGestionnaireAeroports: [],
  entiteGestionnairePorts: [],
  entrepriseElectriciteRemplissantFonctionFourniture: [
    {
      titre: "Entreprise d’électricité",
      description:
        "Toute personne physique ou morale qui assure au moins une des " +
        "fonctions suivantes : la production, le transport, la distribution, " +
        "l'agrégation, la participation active de la demande, le stockage " +
        "d'énergie, la fourniture ou l'achat d'électricité et qui est " +
        "chargée des missions commerciales, techniques ou de maintenance " +
        "liées à ces fonctions, à l'exclusion des clients finaux.",
    },
    {
      titre: "Fourniture",
      description:
        "La vente, y compris la revente, d'électricité à des clients.",
    },
  ],
  entrepriseFerroviaire: [],
  entrepriseFourniture: [],
  etablissementCredit: [],
  executantOperationGestionDechets: [],
  exploitantsInfrastructureTerrestresFournitureServicesSpaciaux: [],
  exploitantsInstallationPetrole: [],
  exploitantsOleoduc: [],
  exploitantsPlateformesNegociation: [],
  exploitantsPointRecharge: [],
  exploitantsServiceTrafficMaritime: [],
  exploitantsSystemeHydrogene: [],
  exploitantsSystemeTransportIntelligents: [],
  fabricationDistributionSubstances: [],
  fabricationMaterielTransportNCA: [],
  fabriquantAppareilEclairage: [],
  fabriquantAppareilsMenagers: [],
  fabriquantAutresMachinesUsageGeneral: [],
  fabriquantAutresMachinesUsageSpecifiqueNCA: [],
  fabriquantCarrosseriesVehiculesAutomobiles: [],
  fabriquantComposantCartesElectroniques: [],
  fabriquantDispositifsMedicaux: [],
  fabriquantDispositifsMedicauxCritiques: [],
  fabriquantEquipementCommunication: [],
  fabriquantEquipementIrradiationMedicaleElectromedicauxElectrotherapeutiques:
    [],
  fabriquantEquipementsAutomobiles: [],
  fabriquantFilsCablesMaterielInstallationElectrique: [],
  fabriquantInstrumentsMesureEssaiNavigationHorlogerie: [],
  fabriquantMachineEquipementNCA: [],
  fabriquantMachineUsageGeneral: [],
  fabriquantMachinesAgricolesForestieres: [],
  fabriquantMachinesFormageMetauxMachinesOutils: [],
  fabriquantMaterielOptiquePhotographiquesSupportsMagnetiquesOptiques: [],
  fabriquantMoteursGeneratriceTransformation: [],
  fabriquantOrdinateursEquipementsPeripheriques: [],
  fabriquantPilesAccumulateursElectriques: [],
  fabriquantProduitPreparationsPharmaceutiques: [],
  fabriquantProduitsElectroniquesGrandPublic: [],
  fabriquantProduitsInformatiquesElectroniquesOptiques: [],
  fournisseurPointEchangeInternet: [],
  fournisseurReseauxCommunicationElectroniquesPublics: [],
  fournisseurReseauxDiffusionContenu: [],
  fournisseurServiceCentresDonnees: [],
  fournisseurServiceCommunicationElectroniquesPublics: [],
  fournisseurServicesDNS: [],
  fournisseurServicesGeres: [],
  fournisseurServicesInformatiqueNuage: [],
  fournisseurServicesSecuriteGeres: [],
  fournisseursDistributeursEauxConsommation: [],
  fournisseursMoteursRechercheEnLigne: [],
  fournisseursPlaceMarcheEnLigne: [],
  fournisseursPlateformesServicesReseauxSociaux: [],
  gestionnaireInfrastructure: [],
  gestionnaireInstallationGNL: [],
  gestionnaireInstallationStockage: [],
  gestionnaireReseau: [],
  gestionnaireReseauDistribution: [],
  gestionnaireReseauTransport: [],
  laboratoireReferenceUE: [],
  operateurDesigneMarcheOuNemo: [],
  operateurReseauChaleurFroid: [],
  organismeRecherche: [],
  prestataireServiceConfiance: [],
  prestataireSoinsSante: [],
  prestatairesServicesPostauxExpedition: [],
  producteur: [],
  rechercheDeveloppementMedicament: [],
  registresNomsDomainesPremierNiveau: [],
  secteurAlimentaireDistributionGrosProductionTransformationIndustrielle: [],
  serviceControleCirculationAerienne: [],
  societeTransportEaux: [],
  transporteursAeriensCommercial: [],
};
