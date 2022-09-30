import type { LocaleMessage } from "@intlify/core-base";
import type { ModuleNamespace } from "vite/types/hot";
import { createI18n, type VueMessageType } from "vue-i18n";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

const messages = {
  en: en as LocaleMessage<VueMessageType>,
  fr: fr as LocaleMessage<VueMessageType>,
};

const i18n = createI18n({
  legacy: false,
  allowComposition: true,
  locale: "fr",
  globalInjection: true,
  messages: messages,
});

export default i18n;

// Hot updates
if (import.meta.hot) {
  import.meta.hot.accept(
    "./locales/en",
    function (e: ModuleNamespace | undefined) {
      i18n.global.setLocaleMessage("en", e?.default);
    }
  );
  import.meta.hot.accept(
    "./locales/fr",
    function (e: ModuleNamespace | undefined) {
      i18n.global.setLocaleMessage("fr", e?.default);
    }
  );
}
