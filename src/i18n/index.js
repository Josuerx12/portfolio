import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "./translations/pt.json";
import enUS from "./translations/en.json";

const resources = {
  "pt-BR": ptBR,
  "en-US": enUS,
};
i18next.use(initReactI18next).init({
  resources,
  lng: navigator.language,
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

export { i18next };
