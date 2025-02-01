// 1 - npx create-react-app gestion-stagiaire
// 2 - npm start
// 3 - npm install redux react-redux
//   - npm install react-router-dom

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListStagiaire from "./components/Stagiaire/ListStagiaire";
import DetailStagiaire from "./components/Stagiaire/DetailStagiaire";
import AddStagiaire from "./components/Stagiaire/addStagaiaires";
import Header from "./components/Header/Header";
import StagiaireApi from "./components/Stagiaire/stagiaireApi";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListStagiaire />} />
          <Route path="/api" element={<StagiaireApi />} />
          <Route path="/:nom" element={<DetailStagiaire />} />
          <Route path="/add" element={<AddStagiaire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
