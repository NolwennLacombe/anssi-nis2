import { Props } from "../../Props.ts";
import { createMakeAndWithStyles } from "tss-react";
import { ColorTheme, useColors } from "@codegouvfr/react-dsfr/useColors";

const { makeStyles } = createMakeAndWithStyles({
  useTheme: function (): ColorTheme {
    return useColors();
  },
});

const useStyles = makeStyles()(() => ({
  root: {},
}));

export const BandeauInformation = (props: Props) => {
  const { className } = props;

  const { classes, cx } = useStyles();

  return (
    <div className="fr-follow">
      <div className={cx([classes.root, "fr-container"], className)}>
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-8">
            <div className="fr-follow__newsletter">
              {/* TODO reprendre texte usuel ? */}
              <div>
                <p className="fr-h5">Inscrivez-vous pour rester informé</p>
                <p className="fr-text--sm">
                  Nous vous accompagnerons dans votre montée en maturité cyber
                  en vous informant des bonnes pratiques, évolutions de la
                  directive et attendus pour votre organisation.
                </p>
              </div>
              <div>
                <button
                  className="fr-btn"
                  title="S‘abonner à notre lettre d’information"
                >
                  {" "}
                  S&apos;abonner
                </button>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-follow__social">
              <p className="fr-h5">
                Suivez-nous <br /> sur les réseaux sociaux
              </p>
              <ul className="fr-links-group">
                <li>
                  <a
                    className="fr-link--twitter fr-link"
                    title="S'abonner à notre compte Twitter - nouvelle fenêtre"
                    href="https://www.twitter.com/anssi_fr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    twitter{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="fr-link--linkedin fr-link"
                    title="Nous suivre sur LinkedIn - nouvelle fenêtre"
                    href="https://www.linkedin.com/company/anssi-fr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    linkedin{" "}
                  </a>
                </li>
                <li>
                  <a
                    className={cx(["fr-link--dailymotion fr-link"], className)}
                    title="Nos vidéos sur Dailymotion - nouvelle fenêtre"
                    href="https://www.dailymotion.com/ANSSI_FR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    dailymotion{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="fr-link--github fr-link"
                    title="Github de l'ANSSI - nouvelle fenêtre"
                    href="https://github.com/ANSSI-FR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    dailymotion{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandeauInformation;