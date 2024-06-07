import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './translations/es.json';
import en from './translations/en.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;