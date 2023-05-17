import { FaLinkedin, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import "./Contact.sass";

const Contact = () => {
  return (
    <main className="contact">
      <h2 className="title">Contato</h2>
      <section className="contact-box">
        <div className="tel">
          <h3>
            <FaPhoneAlt />
            Telefone para contato:
          </h3>
          <a href="tel:+5522997979633">(022) 997979633</a>
        </div>
        <div className="mail">
          <h3>
            <FaMailBulk /> E-mail para contato:
          </h3>
          <a href="mailto:josueaze12@gmail.com">josueaze12@gmail.com</a>
        </div>
        <div className="linkedin">
          <h3>
            <FaLinkedin />
            Meu LinkedIn :
          </h3>
          <a
            href="https://www.linkedin.com/in/josueaze12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para acessar!!
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
