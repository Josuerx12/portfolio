import "./footer.sass";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return <footer>{t("Footer")}</footer>;
};

export { Footer };
