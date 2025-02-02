import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { addStagiaire } from "../../Redux/stagiaireSlice";
import { addNewStagaiare } from "../../ReduxToolkit/stagiairesSlice";

const AddStagiaire = () => {
  const imageRef = useRef();
  const nomRef = useRef();
  const prenomRef = useRef();
  const filRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let idStg = 11;

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedStg = {
      id: idStg++,
      nom: nomRef.current.value,
      prenom: prenomRef.current.value,
      fillière: filRef.current.value,
      image:
        "https://robohash.org/illummolestiaerepellat.png?size=100x100&set=set2",
    };

    // dispatch(addStagiaire(updatedStg));
    dispatch(addNewStagaiare(updatedStg));
    navigate("/");
  };

  return (
    <>
      <h1 className="text-center m-3">Ajouter Stagiaires</h1>
      <form
        action=""
        className="container p-3 row g-2 m-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Saisir le lien de l'image"
          ref={imageRef}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Saisir le nom"
          ref={nomRef}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Saisir le prénom"
          ref={prenomRef}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Saisir la fillière"
          ref={filRef}
          className="form-control"
        />
        <button className="btn btn-primary">Ajouter</button>
      </form>
    </>
  );
};

export default AddStagiaire;
