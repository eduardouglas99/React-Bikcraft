import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import IDadosEmpresa from "interfaces/IDadosEmpresa";

interface IProps {
  dadosEmpresa: IDadosEmpresa;
}

export default function Header(props: IProps) {
  const { dadosEmpresa } = props;
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
          <img src={dadosEmpresa?.logoEmpresa} alt="Bikcraft" title="Bikcraft"/>
        </Link>
        <ul
          className={`${
            menuMobileAberto
              ? `${styles.header__menu} ${styles.header__menuMobile}`
              : `${styles.header__menu}`
          }`}
        >
          {dadosEmpresa?.navegacaoLinks.map((link, index) => (
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
        {!menuMobileAberto ? (
          <RiMenu2Fill
            className={`${`${styles.header__btnMobile}`}`}
            onClick={() => {
              setMenuMobileAberto(!menuMobileAberto);
            }}
          />
        ) : (
          <AiOutlineClose
            className={`${`${styles.header__btnMobile}`}`}
            onClick={() => {
              setMenuMobileAberto(!menuMobileAberto);
            }}
          />
        )}
      </div>
    </div>
  );
}
