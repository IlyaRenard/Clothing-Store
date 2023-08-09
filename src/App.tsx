import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <div className="bg-dark-gray min-h-screen max-h-full">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
