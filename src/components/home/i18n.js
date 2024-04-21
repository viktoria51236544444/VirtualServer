import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Инициализация i18next и добавление плагинов
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru", // Используйте "ru" в качестве языка по умолчанию
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    supportedLngs: ["ru", "en", "kg"], // Добавьте поддерживаемые языки
    load: "languageOnly", // Загрузка только по языкам (без региональных кодов)
  });

export default i18n;
