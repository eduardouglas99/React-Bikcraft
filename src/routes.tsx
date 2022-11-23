import Footer from "./components/Footer";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Quotes from "components/Quotes";
import Home from "paginas/Home";
// import services from "services/services.json";
import Sobre from "paginas/Sobre";
import Produtos from "paginas/Produtos";
import Produto from "paginas/Produto";
import ScrollToTop from "utils/ScrollToTop";
import Portfolio from "paginas/Portfolio";
import Contato from "paginas/Contato";
import NotFound from "paginas/NotFound";
import { useEffect, useState } from "react";
import http from "./http/index";
import ISobreEmpresa from "interfaces/IDadosEmpresa";

export default function AppRouter() {

  const [sobreEmpresa, setsobreEmpresa] = useState<ISobreEmpresa>();

  useEffect(() => {
    http.get("/dadosEmpresa")
    .then((response) => {
      setsobreEmpresa(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <Router>
      <ScrollToTop />
      <Header dadosEmpresa={sobreEmpresa!}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />}>
          <Route path="produto/:direcionamento" element={<Produto />} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Quotes
        background="__bg"
        frase={sobreEmpresa?.quotesFooter.frase!}
        autor={sobreEmpresa?.quotesFooter.autor as string}
      />
      <Footer dadosEmpresa={sobreEmpresa!} />
    </Router>
  );
}
