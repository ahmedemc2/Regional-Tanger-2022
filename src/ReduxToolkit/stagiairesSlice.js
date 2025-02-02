import { createSlice } from "@reduxjs/toolkit";

const initstate = {
  stagiaires: [
    {
      id: 1,
      nom: "Darya",
      prenom: "Dominighi",
      fillière: "Pharmacist",
      image:
        "https://robohash.org/recusandaemaioresdolores.png?size=100x100&set=set1",
    },
    {
      id: 2,
      nom: "Freddie",
      prenom: "Seldon",
      fillière: "Editor",
      image: "https://robohash.org/impeditfugiatnon.png?size=100x100&set=set1",
    },
    {
      id: 3,
      nom: "Gabriel",
      prenom: "Dutton",
      fillière: "Programmer Analyst IV",
      image:
        "https://robohash.org/temporavoluptatumvoluptatibus.png?size=100x100&set=set1",
    },
    {
      id: 4,
      nom: "Kennie",
      prenom: "Kik",
      fillière: "Help Desk Operator",
      image:
        "https://robohash.org/repellatconsecteturreiciendis.png?size=100x100&set=set1",
    },
    {
      id: 5,
      nom: "Curtice",
      prenom: "Churm",
      fillière: "Payment Adjustment Coordinator",
      image: "https://robohash.org/quialiquidomnis.png?size=100x100&set=set1",
    },
    {
      id: 6,
      nom: "Issiah",
      prenom: "Boughen",
      fillière: "Research Associate",
      image: "https://robohash.org/quoeteius.png?size=100x100&set=set1",
    },
    {
      id: 7,
      nom: "Edi",
      prenom: "Godden",
      fillière: "Executive Secretary",
      image:
        "https://robohash.org/dignissimosquosvero.png?size=100x100&set=set1",
    },
    {
      id: 8,
      nom: "Dene",
      prenom: "Harlock",
      fillière: "Clinical Specialist",
      image: "https://robohash.org/repudiandaeetqui.png?size=100x100&set=set1",
    },
    {
      id: 9,
      nom: "Ruggiero",
      prenom: "Towl",
      fillière: "General Manager",
      image: "https://robohash.org/doloremfacereid.png?size=100x100&set=set1",
    },
    {
      id: 10,
      nom: "Barrie",
      prenom: "Ubsdale",
      fillière: "Operator",
      image:
        "https://robohash.org/illummolestiaerepellat.png?size=100x100&set=set1",
    },
  ],
};

const stagiareSlice = createSlice({
  name: "stagiaires",
  initialState: initstate,
  reducers: {
    addNewStagaiare: (state, action) => {
      state.stagiaires.push(action.payload);
    },
  },
});

export const { addNewStagaiare } = stagiareSlice.actions;
export default stagiareSlice.reducer;
