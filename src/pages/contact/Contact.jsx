import { FaLinkedin, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import "./Contact.sass";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <main className="contact">
      <h2 className="title">{t("Contato")}</h2>
      <section className="contact-box">
        <div className="tel">
          <h3>
            <FaPhoneAlt />
            {t("Telefone")}:
          </h3>
          <a href="tel:+5522997979633">(022) 997979633</a>
        </div>
        <div className="mail">
          <h3>
            <FaMailBulk /> {t("Email")}:
          </h3>
          <a href="mailto:josueaze12@gmail.com">josueaze12@gmail.com</a>
        </div>
        <div className="linkedin">
          <h3>
            <FaLinkedin />
            {t("Linkedin")}:
          </h3>
          <a
            href="https://www.linkedin.com/in/josueaze12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Clique")}
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
