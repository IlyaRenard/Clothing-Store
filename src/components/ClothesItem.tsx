import React, { FC, useState } from "react";
import { IClothes } from "../types/Clothes";
import { Rating } from "@mui/material";
import MyButton from "./UI/MyButton";

interface IClothesItemProps {
  clothes: IClothes;
}

const ClothesItem: FC<IClothesItemProps> = ({ clothes }) => {
  const [rating, setRating] = useState<number | null>(0);

  return (
    <div className="m-2 flex flex-col justify-between w-[20%] hover:bg-light-gray">
      <div className="relative p-2 h-[200px]">
        <img
          src={clothes.image}
          alt={clothes.image}
          className="hover:scale-105 hover:transition hover:duration-700 w-full h-full object-contain"
        />
        <button className="absolute top-0 right-0 m-2">❤️</button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[18px] font-bold m-1 text-white line-clamp-1 hover:line-clamp-none ">
          {clothes.title}
        </h2>
        <p className="text-sm m-1 text-white">Цена: {clothes.price} $</p>
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
