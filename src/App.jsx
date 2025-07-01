import "./App.css";
import Home from "./pages/Home";
import DetailPortfolio from "./pages/DetailPortfolio";
import PagesNotFound from "./pages/PagesNotFound";
import Education from "./pages/Education";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<DetailPortfolio />} />
        <Route path="/page-not-found" element={<PagesNotFound />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
