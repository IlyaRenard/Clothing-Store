import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import FavoritePage from "./pages/FavoritePage";
import SignInPage from "./pages/SignInPage";
import ClothingDetailsPage from "./pages/ClothingDetailsPage";

function App() {
  return (
    <div className="bg-dark-gray min-h-screen max-h-full">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/clothes/:id" element={<ClothingDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
