import { useEffect, useState } from "react";
import { useGetClothesQuery } from "../store/reducers/clothes.api";
import { useGetFavoriteQuery } from "../store/reducers/favorite.api";
import { IUser } from "../types/User";
import ClothesItem from "./../components/ClothesItem";
import { IClothes } from "./../types/Clothes";
import MyButton from "../components/UI/MyButton";

const FavoritePage = () => {
  const user: IUser = {
    id: 1,
    username: "Ilya",
    email: "ilya.gavrilik.1998@gmail.com",
    password: "8852785Ilya",
  };

  const { data: favorites } = useGetFavoriteQuery(user, {});
  const { data: clothes } = useGetClothesQuery(null, {});

  const [favoriteClothes, setFavoriteClothes] = useState<IClothes[]>([]);

  const getFavoriteById = () => {
    const favoriteId = favorites?.map((fav) => fav.productId);
    const clothesArray = clothes?.filter((cloth) =>
      favoriteId?.includes(cloth.id)
    );
    setFavoriteClothes(clothesArray!);
    console.log(favoriteClothes);
  };

  useEffect(() => {
    getFavoriteById();
  }, [favorites, clothes]);

  return (
    <div>
      {favoriteClothes === undefined || !favoriteClothes.length ? (
        <h1 className="text-2xl text-center text-white h-screen w-full mt-10">
          Нет товаров в избранном!
        </h1>
      ) : (
        <div className="flex md:flex-row flex-col flex-wrap items-center  justify-center">
          {favoriteClothes?.map((cloth) => (
            <ClothesItem key={cloth.id} clothes={cloth} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
