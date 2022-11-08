import BannerInternas from "components/BannerInternas";
import CardProdutos from "components/CardProdutos";
import FormContato from "components/FormContato";
import styles from "./Produtos.module.scss";
import services from '../../services/services.json';
import { Outlet, useLocation, useParams } from "react-router-dom";

export default function Produtos() {
    const { direcionamento } = useParams();
    const produto = services.produtos.find((item => item.direcionamento === direcionamento));
    return(
        <>
            {!produto && (
                <BannerInternas bgInterna="__bgProdutos" titulo="Produtos" descricao="Conheça todos os nossos produtos"/>
            )}
            <CardProdutos />
            <Outlet />
            <section className={`${styles.produtos__formContato}`}>
                <div className={`container-section flex ${styles.produtos__formContato__container}`}>
                    <h3 className={`section-title ${styles.goldTitle}`}>Orçamento</h3>
                    <div className={`flex ${styles.flex}`}>
                        <FormContato inputPageProdutos={true}/>
                        <div className={`${styles.produtos__formContato__container__information}`}>
                            <div className={`${styles.produtos__formContato__container__information__dados}`}>
                                <h3>Dados</h3>
                                <p>{services.dadosEmpresa.contato.cellphone}</p>
                                <p>{services.dadosEmpresa.contato.email}</p>
                            </div>
                            <div className={`${styles.produtos__formContato__container__information__monteSuaBik}`}>
                                <h3>Monte a sua bikcraft</h3>
                                <p>Escolha as especificações:</p>
                                <ul>
                                    {services.dadosEmpresa.especificacoes.map((item, index) => (
                                        <li key={index}>
                                            - {item.tipo}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}