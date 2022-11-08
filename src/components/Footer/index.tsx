import styles from "./Footer.module.scss";
import servicesInfo from "../../services/services.json";
import facebookImg from "assets/images/redes-sociais/facebook.png";
import instagramImg from "assets/images/redes-sociais/instagram.png";
import twitterImg from "assets/images/redes-sociais/twitter.png";

const resumo = servicesInfo.dadosEmpresa.resumo;
const contato = servicesInfo.dadosEmpresa.contato;
const redeSocial = servicesInfo.dadosEmpresa["redes-sociais"];

export default function Footer() {
  const date = new Date();
  const anoAtual = date.getFullYear();

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer__blockOne}`}>
        <div className={`container flex ${styles.footer__blockOne__container}`}>
          <div className={`${styles.footer__blockOne__container__historia}`}>
            <h3>{resumo.title}</h3>
            <p>{resumo.description}</p>
          </div>
          <div>
            <h3>{contato.title}</h3>
            <ul className={`${styles.footer__blockOne__container__list}`}>
              <a href="tel:+5521979064537">
                <li className={`section-description`}>{contato.cellphone}</li>
              </a>
              <a href="mailto:faleconosco@bikcraft.com.br">
                <li className={`section-description`}>{contato.email}</li>
              </a>
              <a href="https://goo.gl/maps/4bA8dzGsrQjjUFCf9" target="_blank">
                <li className={`section-description`}>{contato.addres}</li>
              </a>
            </ul>
          </div>
          <div className={`${styles.footer__blockOne__container__socialMedia}`}>
            <h3>{redeSocial.title}</h3>
            <div className={`flex ${styles.footer__blockOne__container__socialMedia__link}`}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={facebookImg} alt="" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={instagramImg} alt="" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitterImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`container flex ${styles.footer__blockTwo}`}>
        <span className={`section-description`}>Bikraft {anoAtual} - Alguns direitos reservados.</span>
      </div>
    </footer>
  );
}
