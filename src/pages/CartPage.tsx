import { useTypedSelector } from "../hooks/useTypedSelector";
import { useGetClothesQuery } from "./../store/reducers/clothes.api";

const CartPage = () => {
  const { cart } = useTypedSelector((state) => state);
  console.log("cart", cart);
  const { data } = useGetClothesQuery(null, {});
  console.log(data);
  
  return (
  <div>
    <div>
      
    </div>
  </div>
  );
};

export default CartPage;
