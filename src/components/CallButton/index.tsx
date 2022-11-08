import { Link } from "react-router-dom";
import styles from "./CallButton.module.scss";

interface IProps{
    direcionamento: string,
    nome: string,
    texto?: string,
    espacamento?: string,
    hover?: string,
    colorText?: string
}

export default function CallButton(props: IProps) {
    const { direcionamento, nome, texto, espacamento, hover, colorText } = props;
    return(
        <div className={`${styles.callAction} ${espacamento ? styles['__noPadding'] : ''}`}>
            <p className={`${styles.callAction__text} ${colorText ? styles['whiteText'] : ''} section-description`}>
                {texto}
            </p>
            <Link to={direcionamento} className={`${styles.callAction__button} ${hover ? styles['__hoverBlack'] : ''}`}>
                {nome}
            </Link>
        </div>
    )
}