import { configureStore } from "@reduxjs/toolkit";
import stagiairesReducer from "./stagiairesSlice";

const store = configureStore({
  reducer: {
    stagiaires: stagiairesReducer,
  },
});

export default store;
