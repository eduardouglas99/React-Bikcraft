import styles from "./NotFound.module.scss";
import notFoundImage from "../../assets/images/notFound/notfound.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className={`container-section ${styles.container}`}>
        <button onClick={() => navigate(-1)} className={`${styles.container__btn}`}>
            {'Voltar'}
        </button>
        <div className={`flex ${styles.container__content}`}>
            <img src={notFoundImage} alt="Página não encontrada" />
            <h1>Página não encontrada</h1>
            <p>Desculpa, a página solicitada não pode ser encontrada.</p>
        </div>
    </div>
);
}

export default NotFound;