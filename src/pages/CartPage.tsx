import { useGetClothesQuery } from "./../store/reducers/clothes.api";

const CartPage = () => {
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
