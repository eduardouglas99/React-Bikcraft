import BannerInternas from "components/BannerInternas";
import Qualidade from "components/Qualidade";
import service from "../../services/services.json";
import styles from "./Sobre.module.scss";

export default function Sobre() {
  return (
    <>
      <BannerInternas
        bgInterna="__bgSobre"
        titulo="Sobre"
        descricao="Conheça mais sobre a bikcraft"
      />
      <section className={`container ${styles.sobre}`}>
        <div className={`${styles.sobre__content} flex`}>
          <div className={`${styles.sobre__content__blocoHistoria}`}>
            <h3>{service.sobre.blocoHistoria.titulo}</h3>
            <div className={`line-block ${styles.lineBlock}`}></div>
            <p>{service.sobre.blocoHistoria.texto}</p>
            <p>{service.sobre.blocoHistoria.segundoTexto}</p>
          </div>
          <div className={`${styles.sobre__content__blocoValores}`}>
            <h3>{service.sobre.blocoValores.titulo}</h3>
            <div className={`line-block ${styles.lineBlock}`}></div>
            <ul>
              {service.sobre.blocoValores.valores.map((item, index) => (
                <li key={index}>- {item.valor}</li>
              ))}
            </ul>
          </div>
        </div>
        <img src={service.sobre.blocoValores.imagem} alt="" className={`${styles.sobre__imgSection}`}/>
      </section>
      <Qualidade useCallAction={false} />
    </>
  );
}
