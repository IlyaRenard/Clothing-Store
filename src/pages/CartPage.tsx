import { useEffect, useState } from "react";
import { useGetCartQuery } from "../store/reducers/cart.api";
import { IClothes } from "../types/Clothes";
import { useGetClothesQuery } from "./../store/reducers/clothes.api";
import { IUser } from "../types/User";
import ClothesItem from "../components/ClothesItem";
import MyButton from "../components/UI/MyButton";

const CartPage = () => {
  const user: IUser = {
    id: 1,
    username: "Ilya",
    email: "ilya.gavrilik.1998@gmail.com",
    password: "8852785Ilya",
  };

  const { data: cart } = useGetCartQuery(user, {});
  const { data: clothes } = useGetClothesQuery(null, {});

  const [cartClothes, setCartClothes] = useState<IClothes[]>([]);

  const getCartById = () => {
    const cartId = cart?.map((val) => val.productId);
    const clothesArray = clothes?.filter((cloth) => cartId?.includes(cloth.id));
    setCartClothes(clothesArray!);
  };

  useEffect(() => {
    getCartById();
  }, [clothes, clothes]);

  return (
    <div className="h-screen">
      {cartClothes === undefined || !cartClothes.length ? (
        <h1 className="text-2xl text-center text-white w-full mt-10">
          Нет товаров в корзине!
        </h1>
      ) : (
        <div>
          {cartClothes?.map((val) => (
            <div
              key={val.id}
              className="m-2 flex flex-row justify-start hover:bg-light-gray shadow-xl z-0"
            >
              <div className="relative p-2 h-[200px]">
                <img
                  src={val.image}
                  alt={val.image}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col h-fit">
                <div className="flex">
                  <h2 className="text-[20px] m-1 text-white line-clamp-1 hover:line-clamp-none cursor-pointer">
                    {val.title}
                  </h2>
                  <MyButton>-</MyButton>
                  <span className="text-black text-[25px]  font-bold bg-white px-2 h-fit  rounded-lg">
                    0
                  </span>
                  <MyButton>+</MyButton>
                </div>

                <div className="flex ">
                  <span className="text-[18px] m-1 font-bold  text-white">
                    Цена: {val.price} $
                  </span>
                </div>
                <div>
                  <MyButton>Удалить</MyButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
