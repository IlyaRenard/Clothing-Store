import ClothesItem from "../components/ClothesItem";
import { useGetClothesQuery } from "../store/reducers/clothes.api";

const MainPage = () => {
  const { data } = useGetClothesQuery(null, {});
  return (
    <div className="bg-dark-gray">
      <div className="flex md:flex-row flex-col flex-wrap items-center  justify-center">
        {data?.map((cloth) => (
          <ClothesItem key={cloth.id} clothes={cloth} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
