import { RowContainer } from "../../General/RowContainer.tsx";
import { CenteredContainer } from "../../General/CenteredContainer.tsx";
import { Icon } from "@mui/material";
import Markdown, { Components } from "react-markdown";
import { useEffect, useState } from "react";
import { DefaultComponentExtensible } from "../../../Services/Props";
import { SimulateurResultatProps } from "../../../Services/Simulateur/Props/simulateurResultatProps";
// import MDPrecisionsSurReponseNegative from "../../../References/precisionsSurReponseNegative.md";

const decaleTitre4Niveaux: Partial<Components> = {
  h1: "h4",
  h2: "h5",
  h3: "h6",
};

export const LigneResultat: DefaultComponentExtensible<
  SimulateurResultatProps
> = ({ contenuResultat }: SimulateurResultatProps) => {
  const [contenuPrecistions, setContenuPrecisions] = useState("");
  useEffect(() => {
    contenuResultat.fichierPrecisionSurReponse &&
      fetch(`/contenus/${contenuResultat.fichierPrecisionSurReponse}.md`)
        .then((reponse) => reponse.text())
        .then(setContenuPrecisions);
  }, [contenuResultat.fichierPrecisionSurReponse]);
  return (
    <RowContainer>
      <CenteredContainer>
        <div
          className={[
            "fr-px-4w fr-py-3w fr-nis2-resultat",
            contenuResultat.classeDivResultat,
          ].join(" ")}
        >
          {contenuResultat.classIcone && (
            <div className="fr-grid-row">
              <div className="fr-col fr-nis2-icone">
                <Icon
                  className={[contenuResultat.classIcone, "fr-icon--xl"].join(
                    " ",
                  )}
                />
              </div>
            </div>
          )}
          <h4>{contenuResultat.titre}</h4>
          {contenuResultat.sousTitre && <p>{contenuResultat.sousTitre}</p>}
        </div>
        {contenuResultat.fichierPrecisionSurReponse && (
          <div className="fr-px-4w fr-py-3w fr-nis2-resultat-explications">
            <Markdown components={decaleTitre4Niveaux}>
              {contenuPrecistions}
            </Markdown>
          </div>
        )}
      </CenteredContainer>
    </RowContainer>
  );
};
