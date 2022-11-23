import styles from "./Qualidade.module.scss";
import logoEmpresa from "../../assets/images/bikcraft-qualidade.png";
import valores from "../../services/services.json";
import CallButton from "components/CallButton";
import { useEffect, useState } from "react";
import IQualidade from "interfaces/IQualidade";
import http from "../../http/index";
import { useLocation} from "react-router-dom";

interface IProps {
  useCallAction: boolean;
}

export default function Qualidade(props: IProps) {
  const { useCallAction } = props;
  const [qualidade, setQualidade] = useState<IQualidade>();
  const {pathname} = useLocation();

  useEffect(() => {
    http.get("/qualidade")
    .then((response) => {
      setQualidade(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div className={`${styles.qualidade}`}>
      <div className={`container-section ${styles.qualidade__container} ${pathname === "/sobre" ? styles.qualidade__containerSobre : ""}`}>
        <h3 className={`section-title`}>Qualidade</h3>
        <div className={`flex ${styles.qualidade__container__valores}`}>
          <img src={logoEmpresa} alt="Bikcraft" title="Bikcraft"/>
          <div
            className={`flex ${styles.qualidade__container__valores__group}`}
          >
            {qualidade?.valores.map((item, index) => (
              <div
                key={index}
                className={`${styles.qualidade__container__valores__group__item}`}
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {useCallAction &&
          <CallButton
          texto="conheça mais a nossa história"
          direcionamento="/sobre"
          nome="Sobre"
          hover="__hoverBlack"
        />
        }
      </div>
    </div>
  );
}
