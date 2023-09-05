import { FrCxArg, fr } from "@codegouvfr/react-dsfr";
import { DefaultComponent, DefaultProps } from "../Props.ts";

export const RowContainer: DefaultComponent = ({
  className,
  children,
}: DefaultProps) => {
  return (
      <div className={fr.cx(
              className as FrCxArg)}>
        <div
            className={fr.cx(
                "fr-container",
                "fr-container--fluid",
                "fr-mb-md-14v",
            )}
        >
          <div
              className={fr.cx(
                  "fr-grid-row",
                  "fr-grid-row--gutters",
                  "fr-grid-row--center",
              )}
          >
            {children}
          </div>
        </div>
      </div>
  );
};
