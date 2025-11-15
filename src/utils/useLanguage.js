import { useTranslation } from "react-i18next";

export default function useLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return { changeLanguage };
}
