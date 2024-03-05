import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSharedLayout from "./pages/HomeSharedLayout";
import LandingPage from "./pages/LandingPage";
import FashionPage from "./pages/FashionPage";
import WeddingPage from "./pages/WeddingPage";
import Contact from "./pages/Contact";
import RetouchingPage from "./pages/RetouchingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="fashion" element={<FashionPage />} />
          <Route path="wedding" element={<WeddingPage />} />
          <Route path="retouching" element={<RetouchingPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
