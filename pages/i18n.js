import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

// import translationEN from '../src/locales/en/translation.json';
// import translationPT from '../src/locales/pt/translation.json';

import interEN from '../src/locales/en/interEN.json'
import headerEN from '../src/locales/en/headerEN.json'
import homeEN from '../src/locales/en/homeEN.json'

import interPT from '../src/locales/pt/interPT.json'
import headerPT from '../src/locales/pt/headerPT.json'
import homePT from '../src/locales/pt/homePT.json'

// the translations
const resources = {
    en: {
        // translation: translationEN,
        translation: interEN,
        translation: headerEN,
        translation: homeEN
    },
    pt: {
        // translation: translationPT,
        translation: interPT,
        translation: headerPT,
        translation: homePT
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: 'en',

        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;