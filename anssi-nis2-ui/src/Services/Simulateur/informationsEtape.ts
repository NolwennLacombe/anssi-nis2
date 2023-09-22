import { SimulateurEtapeResult } from "../../Components/Simulateur/SimulateurEtapeResult.tsx";
import { SimulateurEtapeForm } from "../../Components/Simulateur/SimulateurEtapeForm.tsx";
import { DonneesFormulaireSimulateur } from "./donneesFormulaire.ts";
import {
  SimulateurEtapeNodeComponent,
  SimulateurEtapeRenderedComponent,
} from "./component.ts";

export interface InformationsEtape {
  titre: string;
}

export class EtapeInexistante implements InformationsEtape {
  titre = "Hors de portee";
}

export const etapeInexistante = new EtapeInexistante();

export class EtapeExistante implements InformationsEtape {
  constructor(
    public readonly titre: string,
    public readonly elementToRender: SimulateurEtapeRenderedComponent,
  ) {}
}

export class SousEtapeConditionnelle {
  constructor(
    public readonly condition: (
      formData: DonneesFormulaireSimulateur,
    ) => boolean,
    public readonly sousEtape: InformationEtapeForm,
  ) {}
}

export class InformationEtapeForm extends EtapeExistante {
  public readonly elementToRender: SimulateurEtapeRenderedComponent =
    SimulateurEtapeForm;

  public constructor(
    public readonly titre: string,
    public readonly indicationReponses: string,
    protected readonly contenu: SimulateurEtapeNodeComponent,
    public readonly sousEtapeConditionnelle?: SousEtapeConditionnelle,
  ) {
    super(titre, SimulateurEtapeForm);
  }

  recupereContenu() {
    return this.contenu;
  }
}

export class InformationEtapeResult implements EtapeExistante {
  public readonly elementToRender: SimulateurEtapeRenderedComponent =
    SimulateurEtapeResult;

  public constructor(public readonly titre: string) {}
}