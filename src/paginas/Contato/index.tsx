import BannerInternas from "components/BannerInternas";
import FormContato from "components/FormContato";
import styles from "./Contato.module.scss";

const Contato = () => {
  return (
    <section className={`${styles.contato}`}>
        <BannerInternas bgInterna="__bgContato" descricao="Tire suas dúvidas com a gente" titulo="Contato"/>
        <div className={`flex container ${styles.contato__container}`}>
            <FormContato inputPageContato={true}/>
            <div className={`${styles.contato__container__map}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.9046841966365!2d-44.78403378471216!3d-4.238818796918576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78a6ec9daba922b%3A0x839be53b4b2904da!2sR.%20da%20Esperan%C3%A7a%2C%2064%2C%20Bacabal%20-%20MA%2C%2065700-000!5e0!3m2!1spt-BR!2sbr!4v1667850314296!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </div>
        </div>
    </section>
    )
}

export default Contato;