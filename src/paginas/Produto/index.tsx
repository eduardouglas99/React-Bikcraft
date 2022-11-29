import IProdutos from "interfaces/IProdutos";
import NotFound from "paginas/NotFound";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Produto.module.scss";
import http from "../../http/index";

const Produto = () => {
  const { direcionamento } = useParams();
  const [ produtos, setProdutos ] = useState<IProdutos[]>([]);

  useEffect(() => {
    http.get<IProdutos[]>("/produtos")
    .then((response) => {
      setProdutos(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const produto = produtos.find(item => item.direcionamento === direcionamento);
  if (!produto) {
    return (
      <NotFound />
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
