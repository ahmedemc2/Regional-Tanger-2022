import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StagiaireApi = () => {
  const stagiaires = useSelector((state) => state.stagiaires.stagiaires);

  // --------------  Ceci est la bonne réponse pour le question 13 ----------------

  //   const [stagiaires, setStagiares] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://www.ofppt.ma/api/stagiaires")
  //       .then((response) => setStagiares(response.data));
  //   }, [stagiaires]);

  // ------------------------------------------------------------------------------
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nom</th>
          <th scope="col">Prénom</th>
          <th scope="col">Fillière</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        {stagiaires.map((stagiaire) => (
          <tr key={stagiaire.id}>
            <td>{stagiaire.id}</td>
            <td>{stagiaire.nom}</td>
            <td>{stagiaire.prenom}</td>
            <td>{stagiaire.fillière}</td>
            <td>
              <img src={stagiaire.image} alt={stagiaire.nom} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StagiaireApi;
