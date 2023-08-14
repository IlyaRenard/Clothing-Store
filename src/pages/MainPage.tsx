import { ChangeEvent, useEffect, useState } from "react";
import ClothesItem from "../components/ClothesItem";
import MyButton from "../components/UI/MyButton";
import { useSortByASCMutation } from "../store/reducers/clothes.api";

const MainPage = () => {
  //const { data: clothes } = useGetClothesQuery(null, {});
  const [sortType, setSortType] = useState<string>("");
  const [sortByASC, { data: sortedList }] = useSortByASCMutation();

  const sortValue = [
    { value: "", title: "Default" },
    { value: "title", title: "Title" },
    { value: "price", title: "Price" },
    { value: "date", title: "Date" },
  ];

  useEffect(() => {
    sortByASC(sortType);
  }, [sortType]);

  const sortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  return (
    <div className="bg-dark-gray">
      <div className="p-2 my-2 mx-5 flex flex-row justify-between">
        <select
          className="bg-dark-gray text-white py-1 px-4"
          onChange={sortHandler}
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Sorted by
          </option>
          {sortValue.map((val) => (
            <option key={val.value} value={val.value}>
              {val.title}
            </option>
          ))}
        </select>
        <MyButton>Filter</MyButton>
      </div>
      <div className="flex md:flex-row flex-col flex-wrap items-center  justify-center mx-5 my-2">
        {sortedList?.map((cloth) => (
          <ClothesItem key={cloth.id} clothes={cloth} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
