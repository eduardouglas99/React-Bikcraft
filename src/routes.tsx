import Footer from "./components/Footer";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Quotes from "components/Quotes";
import Home from "paginas/Home";
import services from "services/services.json";
import Sobre from "paginas/Sobre";
import Produtos from "paginas/Produtos/Produtos";
import Produto from "paginas/Produto";
import ScrollToTop from "utils/ScrollToTop";
import Portfolio from "paginas/Portfolio";
import Contato from "paginas/Contato";
import NotFound from "paginas/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
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
        frase={services.dadosEmpresa.quotesFooter.frase}
        autor={services.dadosEmpresa.quotesFooter.autor}
      />
      <Footer />
    </Router>
  );
}
