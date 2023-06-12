import React, { FC } from "react";
import { IClothes } from "../types/Clothes";
import { Rating } from "@mui/material";
import MyButton from "./UI/MyButton";

interface IClothesItemProps {
  clothes: IClothes;
}

const ClothesItem: FC<IClothesItemProps> = ({ clothes }) => {
  const [rating, setRating] = React.useState<number | null>(0);

  return (
    <div className="m-2 flex flex-col justify-between w-[20%] h-[20%]">
      <div className="relative">
        <img
          src={clothes.image}
          alt={clothes.image}
          className="hover:pb-2 hover:pl-2 hover:bg-light-gray"
        />
        <button className="absolute top-0 right-0 m-2">❤️</button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold m-1 text-white">{clothes.name}</h2>
        <p className="text-xs m-1 text-white">Цена: {clothes.price} $</p>
        <p className="text-xs m-1 text-white">
          Описание: {clothes.description}
        </p>
        <MyButton>В корзину</MyButton>
      </div>
      <div className="flex flex-row justify-around mb-2">
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
