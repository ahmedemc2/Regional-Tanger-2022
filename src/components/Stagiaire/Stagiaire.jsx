import React from "react";
import style from "./Stagiaire.module.css";
import { useNavigate } from "react-router-dom";

const Stagiaire = (props) => {
  const navigate = useNavigate();
  const { stagiaire } = props;

  return (
    <div className={style.stagiaire}>
      <div
        className={style.satgiaireImg}
        onClick={() => navigate(`/${stagiaire.nom}`)}
      >
        <img src={stagiaire.image} alt={stagiaire.nom} />
      </div>
      <h4 className={style.stagiaireNom}>{stagiaire.nom}</h4>
    </div>
  );
};

export default Stagiaire;
