import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: require('./locales/en/home.json'),
        common: require('./locales/en/common.json'),
        about: require('./locales/en/about.json'),
        investors: require('./locales/en/investors.json'),
        news: require('./locales/en/news.json'),
        faq: require('./locales/en/faq.json'),
        contact: require('./locales/en/contact.json'),
        roadmap: require('./locales/en/roadmap.json'),
      },
      sv: {
        home: require('./locales/sv/home.json'),
        common: require('./locales/sv/common.json'),
        about: require('./locales/sv/about.json'),
        investors: require('./locales/sv/investors.json'),
        news: require('./locales/sv/news.json'),
        faq: require('./locales/sv/faq.json'),
        contact: require('./locales/sv/contact.json'),
        roadmap: require('./locales/sv/roadmap.json')
      },
    },
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;