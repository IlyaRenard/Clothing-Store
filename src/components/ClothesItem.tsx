import { Rating } from "@mui/material";
import { FC, useEffect, useState } from "react";
import favoriteDefault from "../assets/image/favoriteDefault.svg";
import favoriteTap from "../assets/image/favoriteTap.svg";
import {
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useGetCartQuery,
} from "../store/reducers/cart.api";
import { useGetClotheByIdMutation } from "../store/reducers/clothes.api";
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoriteQuery,
} from "../store/reducers/favorite.api";
import { ICart } from "../types/Cart";
import { IClothes } from "../types/Clothes";
import { IUser } from "../types/User";
import { IFavorite } from "./../types/Favorite";
import MyButton from "./UI/MyButton";
import { NavLink } from "react-router-dom";

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

  const [addToFavorite] = useAddFavoriteMutation();
  const [addToCart] = useAddToCartMutation();
  const [deleteFromFavorite] = useDeleteFavoriteMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const { data: favoriteData } = useGetFavoriteQuery(user, {});
  const { data: cart } = useGetCartQuery(user, {});

  const favorite: IFavorite = {
    userId: user.id,
    productId: clothes.id,
  };

  const cartClothes: ICart = {
    userId: user.id,
    productId: clothes.id,
    cartProduct: clothes,
    quantity: 1,
  };

  // добавление/удаление товара из избранного
  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);

    if (favoriteData?.find((val) => val.productId === clothes.id)) {
      const currentFavorite = favoriteData.find(
        (val) => val.productId === clothes.id
      );
      deleteFromFavorite(currentFavorite as IFavorite);
    } else addToFavorite(favorite);
  };

  // добавление/удаление товара из корзины
  const cartHandler = () => {
    setIsCart(!isCart);
    if (cart?.find((val) => val.productId === clothes.id)) {
      const currentCart = cart.find((val) => val.productId === clothes.id);
      deleteFromCart(currentCart as ICart);
    } else {
      addToCart(cartClothes);
    }
  };

  //проверка есть ли товар в избраннои
  const isFavoriteHandler = () => {
    if (favoriteData?.find((val) => val.productId === clothes.id)) {
      setIsFavorite(true);
    }
  };

  //проверка есть ли товар в корзине
  const isCartHandler = () => {
    if (cart?.find((val) => val.productId === clothes.id)) {
      setIsCart(true);
    }
  };

  useEffect(() => {
    isFavoriteHandler();
    isCartHandler();
  }, []);

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
        <NavLink to={`/clothes/${clothes.id}`}>
          <h2 className="text-[17px] font-bold m-1 text-white line-clamp-1 hover:line-clamp-none cursor-pointer">
            {clothes.title}
          </h2>
        </NavLink>
        <p className="text-sm m-1 text-white">Цена: {clothes.price} $</p>
      </div>
      {isCart ? (
        <MyButton onClick={() => cartHandler()}>Удалить из корзины</MyButton>
      ) : (
        <MyButton onClick={() => cartHandler()}>В корзину</MyButton>
      )}

      <div className="flex flex-row flex-wrap justify-around mb-2">
        <Rating
          value={clothes.rating?.rate}
          readOnly
          className="!text-purple-peril"
        />
        <p className="text-white cursor-pointer">
          Отзывы ({clothes.rating?.count})
        </p>
      </div>
    </div>
  );
};

export default ClothesItem;
