import styles from "./Qualidade.module.scss";
import logoEmpresa from "../../assets/images/bikcraft-qualidade.png";
import valores from "../../services/services.json";
import CallButton from "components/CallButton";

interface IProps {
  useCallAction: boolean;
}

export default function Qualidade(props: IProps) {
  const { useCallAction } = props;

  return (
    <div className={`${styles.qualidade}`}>
      <div className={`container-section ${styles.qualidade__container}`}>
        <h3 className={`section-title`}>Qualidade</h3>
        <div className={`flex ${styles.qualidade__container__valores}`}>
          <img src={logoEmpresa} alt="" />
          <div
            className={`flex ${styles.qualidade__container__valores__group}`}
          >
            {valores.qualidade.valores.map((item, index) => (
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
