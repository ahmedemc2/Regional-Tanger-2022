import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={style.link}>
            Liste des stagiaires
          </Link>
        </li>
        <li>
          <Link to="/add" className={style.link}>
            Ajouter un stagiaires
          </Link>
        </li>
        <li>
          <Link to="/api" className={style.link}>
            Stagiaire de l'API
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
