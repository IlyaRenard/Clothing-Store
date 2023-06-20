import { Rating } from "@mui/material";
import { FC, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { IClothes } from "../types/Clothes";
import MyButton from "./UI/MyButton";
import favoriteDefault from "../assets/image/favoriteDefault.svg";
import favoriteTap from "../assets/image/favoriteTap.svg";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IClothesItemProps {
  clothes: IClothes;
}

const ClothesItem: FC<IClothesItemProps> = ({ clothes }) => {
  const [rating, setRating] = useState<number | null>(0);
  const { addItemToCart } = useAppDispatch();
  const { addToFavorite } = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const {favorite} = useTypedSelector(state=>state)

  const favoriteHandler = () => {
    addToFavorite(clothes);
    setIsFavorite(!isFavorite);
    console.log(favorite);
    
  };

  return (
    <div className="m-2 flex flex-col flex-wrap justify-between  md:w-[19%] w-[90%] hover:bg-light-gray shadow-xl z-0">
      <div className="relative p-2 h-[200px]">
        <img
          src={clothes.image}
          alt={clothes.image}
          className=" w-full h-full object-contain"
        />
        <button
          className="absolute top-0 right-0 m-2"
          onClick={() => favoriteHandler()}
        >
          <img
            src={!isFavorite ? favoriteDefault : favoriteTap}
            alt="favorite"
            className="h-6 hover:scale-125 ease-in duration-300"
          />
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[17px] font-bold m-1 text-white line-clamp-1 hover:line-clamp-none cursor-pointer">
          {clothes.title}
        </h2>

        <p className="text-sm m-1 text-white">Цена: {clothes.price} $</p>
      </div>

      <MyButton onClick={() => addItemToCart(clothes)}>В корзину</MyButton>
      <div className="flex flex-row flex-wrap justify-around mb-2">
        <Rating
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          className="!text-purple-peril"
        />
        <p className="text-white">Отзывы (0)</p>
      </div>
    </div>
  );
};

export default ClothesItem;
