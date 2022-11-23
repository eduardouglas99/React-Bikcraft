import BannerInternas from "components/BannerInternas";
import Qualidade from "components/Qualidade";
import http from "../../http/index";
import ISobre from "interfaces/ISobre";
import { useEffect, useState } from "react";
import service from "../../services/services.json";
import styles from "./Sobre.module.scss";

export default function Sobre() {

  const [sobre, setSobre] = useState<ISobre>()

  useEffect(() => {
    http.get("/sobre")
    .then((response) => {
      setSobre(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

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
            <h3>{sobre?.blocoHistoria.titulo}</h3>
            <div className={`line-block ${styles.lineBlock}`}></div>
            <p>{sobre?.blocoHistoria.texto}</p>
            <p>{sobre?.blocoHistoria.segundoTexto}</p>
          </div>
          <div className={`${styles.sobre__content__blocoValores}`}>
            <h3>{sobre?.blocoValores.titulo}</h3>
            <div className={`line-block ${styles.lineBlock}`}></div>
            <ul>
              {sobre?.blocoValores.valores.map((item, index) => (
                <li key={index}>- {item.valor}</li>
              ))}
            </ul>
          </div>
        </div>
        <img src={sobre?.blocoValores.imagem} alt="Bicicletas Bikcraft" title="Bicicletas Bikcraft" className={`${styles.sobre__imgSection}`}/>
      </section>
      <Qualidade useCallAction={false} />
    </>
  );
}
