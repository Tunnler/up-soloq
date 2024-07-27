import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PremiosPage from "@/pages/premios";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PremiosPage />} path="/premios" />
    </Routes>
  );
}

export default App;
