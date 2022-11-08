import BannerInternas from "components/BannerInternas";
import CarrouselPortifolio from "components/CarroulselPortfolio";
import service from "../../services/services.json";
import styles from "./Portfolio.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";

const Portfolio = () => {
  return (
    <section>
      <BannerInternas
        bgInterna="__bgPortfolio"
        descricao="Conheça os projetos que amamos mostrar"
        titulo="Portfólio"
      />
      <blockquote className={`flex container ${styles.quoteClientes}`}>
        <Swiper modules={[Autoplay]} loop={true} autoplay slidesPerView={1}>
          {service.portfolio.depoimentos.map((item, index) => (
            <SwiperSlide key={index}>
              <h4>{item.texto}</h4>
              <cite>{item.autor}</cite>
            </SwiperSlide>
          ))}
        </Swiper>
      </blockquote>
      <CarrouselPortifolio />
    </section>
  );
};

export default Portfolio;
