import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./Accueil.tsx";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import Simulateur from "./Simulateur.tsx";
import { AppContext, Context } from "./AppContext.tsx";
import { sendFormDataToApi } from "./Services/sendFormDataToApi.ts";
import {
  reducerBoutons,
  reducerFormData,
} from "./Services/Simulateur/reducers.ts";
import APropos from "./Components/PagesEdito/APropos.tsx";
import MentionsLegales from "./Components/PagesEdito/MentionsLegales.tsx";
import { PageEdito } from "./Components/PagesEdito/PageEdito.tsx";
import GestionCookies from "./Components/PagesEdito/GestionCookies.tsx";

startReactDsfr({ defaultColorScheme: "system" });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/simulateur",
    element: <Simulateur />,
  },
  {
    path: "/a-propos",
    element: (
      <PageEdito titre="A propos">
        <APropos />
      </PageEdito>
    ),
  },
  {
    path: "/mentions-legales",
    element: (
      <PageEdito titre="Mentions légales">
        <MentionsLegales />
      </PageEdito>
    ),
  },
  {
    path: "/gestion-des-cookies",
    element: (
      <PageEdito titre="Gestion des cookies">
        <GestionCookies />
      </PageEdito>
    ),
  },
]);

const defaultContext: Context = {
  sendFormData: sendFormDataToApi,
  simulateur: {
    reducerFormData: reducerFormData,
    reducerBoutons: reducerBoutons,
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContext.Provider value={defaultContext}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  </React.StrictMode>,
);
