import { useParams } from "react-router-dom";
import services from "../../services/services.json";
import styles from "./Produto.module.scss";

const Produto = () => {
  const { direcionamento } = useParams();
  const produto = services.produtos.find(
    (item) => item.direcionamento === direcionamento
  );
  if (!produto) {
    return (
      <div className={`flex container ${styles.teste}`}>
        <h1>Não existe</h1>
      </div>
    );
  }

  return (
    <div className={`flex container ${styles.produto}`}>
        <div style={{background: produto.bgProduto}} className={`${styles.produto__bgProduto}`}></div>
        <div className={`${styles.produto__infoContent}`}>
          <p className={`flex`}>{produto.descricaoCompleta}</p>
          <ul>
            {produto.infosItem.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Produto;
