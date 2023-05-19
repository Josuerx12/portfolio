import "./Lang.sass";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Lang = () => {
  const { t } = useTranslation();
  const handlerChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="langContainer">
      <select
        className="languages"
        value={i18n.language}
        onChange={handlerChangeLang}
      >
        <option>{t("Lang")}</option>
        <option value="en-US">{t("en")}</option>
        <option value="pt-BR">{t("pt")}</option>
      </select>
    </div>
  );
};

export default Lang;
