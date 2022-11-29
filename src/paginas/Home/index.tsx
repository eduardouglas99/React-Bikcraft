import CallButton from "components/CallButton";
import CarroulselPortfolio from "components/CarroulselPortfolio";
import Qualidade from "components/Qualidade";
import Quotes from "components/Quotes";
import http from "../../http/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import IDadosEmpresa from "interfaces/IDadosEmpresa";
import IProdutos from "interfaces/IProdutos";

export default function Home() {

  const [sobreEmpresa, setsobreEmpresa] = useState<IDadosEmpresa>();
  const [produtos, setProdutos] = useState<IProdutos[]>([])

  useEffect(() => {
    http.get("/dadosEmpresa")
    .then((response) => {
      setsobreEmpresa(response.data);
    })
    .catch((error) => {
      console.log(error)
    });

    http.get<IProdutos[]>("/produtos")
    .then((response) => {
      setProdutos(response.data);
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])

  return (
    <>
      <div className={`${styles.banner}`}>
        <div className={`container-section`}>
          <h1 className={`${styles.banner__titulo}`}>
            BICICLETAS FEITAS A MÃO
          </h1>
          <Quotes
            frase={sobreEmpresa?.quotesBanner.frase!}
            autor={sobreEmpresa?.quotesBanner.autor as string}
          />
          <CallButton
            direcionamento="/produtos"
            nome="Orçamento"
            espacamento="noPadding"
          />
        </div>
      </div>

      <section className={`${styles.produtos}`}>
        <div className={`container-section`}>
          <h3 className={`section-title`}>Produtos</h3>
          <div className={`flex ${styles.produtos__card}`}>
            {produtos.map((item, index) => (
              <Link to={`produtos/produto/${item.direcionamento}`} key={index}>
                <div className={`container`}>
                  <img src={item.imagem} alt={item.nome} title={item.nome} />
                </div>
                <div className={`${styles.produtos__card__content}`}>
                  <h4 className={`line-block`}>{item.nome}</h4>
                  <p className={`section-description`}>{item.descricao}</p>
                </div>
            </Link>
            ))}
          </div>
          <CallButton 
            texto="clique aqui e veja os detalhes dos produtos"
            direcionamento="/produtos"
            nome="Produtos"
            hover="__hoverBlack"
          />
        </div>
      </section>

      <CarroulselPortfolio 
        title="Portfólio"
        colorTitle="goldTitle"
      />

      <Qualidade useCallAction={true}/>
    </>
  );
}
