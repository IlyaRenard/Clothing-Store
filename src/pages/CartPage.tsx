import { useEffect, useState } from "react";
import MyButton from "../components/UI/MyButton";
import {
  useDeleteFromCartMutation,
  useGetCartQuery,
  useUpdateCartMutation,
} from "../store/reducers/cart.api";
import { IUser } from "../types/User";

const CartPage = () => {
  const user: IUser = {
    id: 1,
    username: "Ilya",
    email: "ilya.gavrilik.1998@gmail.com",
    password: "8852785Ilya",
  };

  const { data: cart } = useGetCartQuery(user, {});
  const [deleteProductFromCart] = useDeleteFromCartMutation();
  const [totalCost, setTotalCost] = useState<number>(0);
  const [updateQuantity] = useUpdateCartMutation();

  const getTotalPrice = () => {
    let initialValue = 0;
    let total = cart?.reduce(
      (acc, curVal) => acc + curVal.quantity * curVal?.cartProduct?.price!,
      initialValue
    );
    if (total === undefined) {
      setTotalCost(0);
    } else {
      setTotalCost(+total!.toFixed(2));
    }
  };

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  return (
    <div className="min-h-screen max-h-full">
      {cart === undefined || !cart.length ? (
        <h1 className="text-2xl text-center text-white w-full mt-10">
          Нет товаров в корзине!
        </h1>
      ) : (
        <div className="m-2 flex flex-col md:justify-between">
          {cart?.map((val) => (
            <div key={val.id}>
              <div className="flex flex-col md:flex-row md:justify-between hover:bg-light-gray shadow-xl z-0">
                <div className="flex flex-row">
                  <div className="relative p-2 h-[200px] w-[200px]">
                    <img
                      src={val.cartProduct?.image}
                      alt={val.cartProduct?.image}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-[20px] m-1 text-white line-clamp-1 hover:line-clamp-none cursor-pointer">
                      {val.cartProduct?.title}
                    </h2>
                    <span className="text-[18px] m-1 font-bold  text-white">
                      Цена: {val.cartProduct?.price} $
                    </span>
                  </div>
                </div>

                <div className="flex flex-row md:justify-between justify-end items-center md:w-[20%] w-full">
                  <div className="p-2 flex flex-row items-center">
                    <MyButton
                      onClick={() =>
                        updateQuantity({
                          ...val,
                          quantity: val.quantity - 1,
                        })
                      }
                    >
                      -
                    </MyButton>
                    <span className="text-black text-[22px]  font-bold bg-white px-1 h-fit  rounded-lg">
                      {val.quantity}
                    </span>
                    <MyButton
                      onClick={() =>
                        updateQuantity({
                          ...val,
                          quantity: val.quantity + 1,
                        })
                      }
                    >
                      +
                    </MyButton>
                  </div>
                  <div className="mr-0 md:mr-[4.5rem]">
                    <MyButton onClick={() => deleteProductFromCart(val)}>
                      Удалить
                    </MyButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row justify-between mx-5 my-2">
            <span className="text-white text-2xl">Общая стоимость: </span>
            <span className="text-white text-2xl">{totalCost} $</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
