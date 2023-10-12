import { SimulateurEtapeRenderedComponent } from "../../Services/Simulateur/Props/component";
import { LigneReseauxSociaux } from "./Resultats/LigneReseauxSociaux.tsx";
import { LigneBienDebuter } from "./Resultats/LigneBienDebuter.tsx";
import { LigneResultat } from "./Resultats/LigneResultat.tsx";
import { LigneResterInformer } from "./Resultats/LigneResterInformer.tsx";
import { eligibilite } from "../../Domaine/Simulateur/resultatEligibilite.ts";
import { recupereContenusResultatEligibilite } from "../../Services/Simulateur/recupereContenusResultatEligibilite.ts";
import { SimulateurEtapeRenderedProps } from "../../Services/Simulateur/Props/simulateurEtapeProps";

export const SimulateurEtapeResult: SimulateurEtapeRenderedComponent = ({
  donneesFormulaire,
}: SimulateurEtapeRenderedProps) => {
  const statutEligibiliteNIS2 = eligibilite(donneesFormulaire);
  const contenuResultat = recupereContenusResultatEligibilite(
    statutEligibiliteNIS2,
  );
  return (
    <>
      <LigneResultat contenuResultat={contenuResultat} />
      <LigneResterInformer />
      <LigneBienDebuter />
      <LigneReseauxSociaux />
    </>
  );
};
