import CallButton from "components/CallButton";
import CarroulselPortfolio from "components/CarroulselPortfolio";
import Qualidade from "components/Qualidade";
import Quotes from "components/Quotes";
import { Link } from "react-router-dom";
import service from "../../services/services.json";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className={`container-section`}>
          <h1 className={`${styles.banner__titulo}`}>
            BICICLETAS FEITAS A MÃO
          </h1>
          <Quotes
            frase={service.dadosEmpresa.quotesBanner.frase}
            autor={service.dadosEmpresa.quotesBanner.autor}
          />
          <CallButton
            // texto="clique aqui e veja os detalhes dos produtos"
            direcionamento="/orcamento"
            nome="Orçamento"
            espacamento="noPadding"
          />
        </div>
      </div>

      <section className={`${styles.produtos}`}>
        <div className={`container-section`}>
          <h3 className={`section-title`}>Produtos</h3>
          <div className={`flex ${styles.produtos__card}`}>
            {service.produtos.map((item, index) => (
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
