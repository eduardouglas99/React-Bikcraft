import styles from "./Header.module.scss";
import headerImg from "../../assets/images/header/bikcraft.png";
import { Link, NavLink } from "react-router-dom";
import { RiBikeFill } from "react-icons/ri";
import { useState } from "react";
import service from "../../services/services.json";

export default function Header() {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  let activeStyle = {
    color: "#fff",
  };

  return (
    <div className={`${styles.header}`}>
      <div className={`container flex ${styles.header__container}`}>
        <Link
          to="/"
          className={`${styles.header__logo}`}
          onClick={() => {
            setMenuMobileAberto(false);
          }}
        >
          <img src={headerImg} alt="" />
        </Link>
        <ul
          className={`${
            menuMobileAberto
              ? `${styles.header__menu} ${styles.header__menuMobile}`
              : `${styles.header__menu}`
          }`}
        >
          {service.dadosEmpresa.navegacaoLinks.map((link, index) => (
            <NavLink
              to={link.direcionamento}
              key={index}
              onClick={() => {
                setMenuMobileAberto(false);
              }}
              className={`${menuMobileAberto ? `${styles.linksMobile}` : ``}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {link.titulo}
            </NavLink>
          ))}
        </ul>
        <RiBikeFill
          className={`${
            menuMobileAberto
              ? `${styles.header__btnMobile} ${styles.header__btnActive}`
              : `${styles.header__btnMobile}`
          }`}
          onClick={() => {
            setMenuMobileAberto(!menuMobileAberto);
          }}
        />
      </div>
    </div>
  );
}
