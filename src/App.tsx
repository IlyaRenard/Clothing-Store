import ClothesItem from "./components/ClothesItem";
import { IClothes } from "./types/Clothes";

function App() {
  const clothes: IClothes = {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    isAvailability: false,
  };

  return (
    <div className="bg-dark-gray">
    <div className="flex flex-wrap flex-row justify-center">
      <ClothesItem clothes={clothes} />
      <ClothesItem clothes={clothes} />
      <ClothesItem clothes={clothes} />
      <ClothesItem clothes={clothes} />
      <ClothesItem clothes={clothes} />
      <ClothesItem clothes={clothes} />
    </div>
  </div>
  );
}

export default App;
