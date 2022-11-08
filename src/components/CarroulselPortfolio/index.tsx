import imagensCarroulsel from "../../services/services.json";
import imagemFixa from "assets/images/portfolio/esporte.jpg";
import styles from "./carrouselPortifolio.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import CallButton from "components/CallButton";
import { useLocation } from "react-router-dom";

interface IProps {
  title?: string;
  colorTitle?: string;
}

export default function CarrouselPortifolio(props: IProps) {
  const { title, colorTitle } = props;
  const { pathname } = useLocation();
  return (
    <section className={`${styles.carrouselPortifolio}`}>
      <div className={`${styles.carrouselPortifolio__container}`}>
        {pathname !== "/portfolio" && (
          <h3
            className={`${title ? ["section-title"] : ""} ${
              colorTitle ? styles["goldTitle"] : ""
            }`}
          >
            {title}
          </h3>
        )}
        <div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay
            slidesPerView={2}
            spaceBetween={20}
          >
            {imagensCarroulsel.portfolio.carroulsel.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img.imagem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`${styles.carrouselPortifolio__container__imagemFixa}`}>
          <img src={imagemFixa} alt="" />
        </div>
      </div>
      {pathname !== "/portfolio" && (
        <CallButton
        texto="conheça mais o nosso portfólio"
        direcionamento="/portfolio"
        nome="Portfólio"
        colorText="whiteText"
        />
      )}
    </section>
  );
}
