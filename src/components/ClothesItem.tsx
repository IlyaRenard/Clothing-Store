import React, { FC } from "react";
import { IClothes } from "../types/Clothes";
import { Rating } from "@mui/material";

interface IClothesItemProps {
  clothes: IClothes;
}

const ClothesItem: FC<IClothesItemProps> = ({ clothes }) => {
  const [rating, setRating] = React.useState<number | null>(0);

  return (
    <div className="relative w-[250px] h-[200px] m-2">
      <div>
        <img src={clothes.image} alt={clothes.image} className="" />
        <button className="absolute top-0 right-0 m-2">❤️</button>
      </div>
      <div>
        <h2 className="">{clothes.name}</h2>
        <p>Цена: {clothes.price}</p>
        <p>Описание: {clothes.description}</p>
        <button>В корзину</button>
      </div>
      <div>
        <Rating
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          className="!text-mint-green"
        />
        <p>Отзывы (0)</p>
      </div>
    </div>
  );
};

export default ClothesItem;
