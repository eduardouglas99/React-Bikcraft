import styles from "./BannerInternas.module.scss";
interface IProps {
  bgInterna: string;
  titulo: string,
  descricao: string
}

export default function BannerInternas(props: IProps) {
  const { bgInterna, titulo, descricao } = props;

  return (
    <nav>
      <div className={`${styles.bannerInternas} ${styles[bgInterna]} flex`}>
        <div className={`container flex ${styles.bannerInternas__container}`}>
          <h2>{titulo}</h2>
          <div className={`line-block-internas`}></div>
          <p className={`section-description`}>{descricao}</p>
        </div>
      </div>
    </nav>
  );
}
