import styles from "./CardProdutos.module.scss";
import { Link, useParams } from "react-router-dom";
import IProdutos from "interfaces/IProdutos";

interface IProps{
  produtos: IProdutos[];
}

export default function CardProdutos(props: IProps) {
  const { produtos } = props;
  const { direcionamento } = useParams();
  const produto = produtos.find(
    (item) => item.direcionamento === direcionamento
  );
  if (!produto) {
    return (
      <div className={`container`}>
        {produtos.map((item, index) => (
          <Link
            to={`produto/${item.direcionamento}`}
            key={index}
            className={`flex ${styles.cardProdutos}`}
          >
            <div
              className={`flex ${styles.cardProdutos__item}`}
              style={{ background: item.bgCard }}
            >
              <h2
                className={`line-block-internas line-block-internas-produtos`}
              >
                {item.nome}
              </h2>
            </div>
            <div className={`flex ${styles.cardProdutos__imagemBike}`}>
              <img src={item.imagem} alt={item.nome} title={item.nome} />
            </div>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className={`container`}>
      <div
        className={`flex ${styles.cardProdutos} ${styles.cardProdutosProduto}`}
      >
        <div
          className={`flex ${styles.cardProdutos__item}`}
          style={{ background: produto.bgCard }}
        >
          <h2 className={`line-block-internas line-block-internas-produtos`}>
            {produto.nome}
          </h2>
        </div>
        <div className={`flex ${styles.cardProdutos__imagemBike}`}>
          <img src={produto.imagem} alt={produto.nome} title={produto.nome} />
        </div>
      </div>
    </div>
  );
}
