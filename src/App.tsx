import ClothesItem from "./components/ClothesItem";
import { useGetClothesQuery } from "./store/reducers/clothes.api";
import { IClothes } from "./types/Clothes";

function App() {
  const { data } = useGetClothesQuery(null, {});

  return (
    <div className="bg-dark-gray">
      <div className="flex flex-row flex-wrap items-stretch content-between justify-center">
        {data?.map((cloth) => (
          <ClothesItem key={cloth.id} clothes={cloth} />
        ))}
      </div>
    </div>
  );
}

export default App;
