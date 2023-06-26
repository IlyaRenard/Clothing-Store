import { Rating } from "@mui/material";
import { FC, useState } from "react";
import favoriteDefault from "../assets/image/favoriteDefault.svg";
import favoriteTap from "../assets/image/favoriteTap.svg";
import { useAddToCartMutation } from "../store/reducers/cart.api";
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoriteQuery,
} from "../store/reducers/favorite.api";
import { ICart } from "../types/Cart";
import { IClothes } from "../types/Clothes";
import { IUser } from "../types/User";
import MyButton from "./UI/MyButton";
import { IFavorite } from "./../types/Favorite";

interface IClothesItemProps {
  clothes: IClothes;
}

const ClothesItem: FC<IClothesItemProps> = ({ clothes }) => {
  const user: IUser = {
    id: 1,
    username: "Ilya",
    email: "ilya.gavrilik.1998@gmail.com",
    password: "8852785Ilya",
  };
  const [rating, setRating] = useState<number | null>(0);
  const [addFavorite] = useAddFavoriteMutation();
  const [addToCart] = useAddToCartMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const [isFavorite, setIsFavorite] = useState(false);
  const { data: favoriteData } = useGetFavoriteQuery(user, {});

  const favorite: IFavorite = {
    userId: user.id,
    productId: clothes.id,
  };

  const cartClothes: ICart = {
    userId: user.id,
    productId: clothes.id,
    quantity: 1,
  };

  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);

    if (
      favoriteData?.find(
        (val) => val.productId === clothes.id && val.userId === user.id
      )
    ) {
      const currentFavorite = favoriteData.find(
        (val) => val.productId === clothes.id && val.userId === user.id
      );
      deleteFavorite(currentFavorite as IFavorite);
    } else addFavorite(favorite);
  };

  const cartHandler = () => {
    addToCart(cartClothes);
    console.log(cartClothes);
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

      <MyButton onClick={() => cartHandler()}>В корзину</MyButton>
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
