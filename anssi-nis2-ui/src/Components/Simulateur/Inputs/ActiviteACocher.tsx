import {
  DefaultComponentExtensible,
  DefaultProps,
} from "../../../Services/Props";
import { useId, useReducer } from "react";
import { changeInfobulleOuverte } from "../../../Services/Simulateur/Reducteurs.ts";
import { IconeInfobulle } from "../../Icones/IconeInfobulle.tsx";
import { Infobulle } from "../Infobulle.tsx";
import { fr } from "@codegouvfr/react-dsfr";
import { OptionChampSimulateur } from "../../../Services/Simulateur/Props/optionChampSimulateur";

type Propiprops = DefaultProps & {
  optionChampSimulateur: OptionChampSimulateur;
  indice: number;
};
export const ActiviteACocher: DefaultComponentExtensible<Propiprops> = ({
  optionChampSimulateur,
  indice,
}: Propiprops) => {
  const { label, contenuInfobulle, nativeInputProps } = optionChampSimulateur;
  const id = useId();
  const getInputId = (i: number) => `${id}-${i}`;
  const recupereIdInfobulle = (i: number) => `${indice}-infoBulle-${i}`;
  const type = "checkbox";
  const idInfobulle = recupereIdInfobulle(indice);
  const [infobulleAffichee, propageInfobulleAffichee] = useReducer(
    changeInfobulleOuverte,
    { id: "" },
  );
  return (
    <>
      <div className={fr.cx(`fr-${type}-group`)}>
        <input
          type={type}
          id={getInputId(indice)}
          {...nativeInputProps}
          name="activites"
        />
        <label className="fr-label" htmlFor={getInputId(indice)}>
          {label}{" "}
          {!!contenuInfobulle?.length && (
            <IconeInfobulle
              onClick={() => {
                propageInfobulleAffichee(idInfobulle);
              }}
              label={label}
            />
          )}
        </label>
      </div>
      {!!contenuInfobulle?.length && (
        <>
          <Infobulle
            id={idInfobulle}
            cachee={idInfobulle !== infobulleAffichee.id}
            contenu={contenuInfobulle.map(({ titre, description }) => (
              <>
                <h6>{titre}</h6>
                <p className="fr-text--sm">{description}</p>
              </>
            ))}
            action={() => {
              propageInfobulleAffichee(idInfobulle);
            }}
          />
        </>
      )}
    </>
  );
};
