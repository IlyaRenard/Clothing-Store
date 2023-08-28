import { ChangeEvent, useEffect, useState } from "react";
import ClothesItem from "../components/ClothesItem";
import MyButton from "../components/UI/MyButton";
import {
  useGetClothesQuery,
  useSortByASCMutation,
} from "../store/reducers/clothes.api";
import MySelect from "./../components/UI/MySelect";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  const [pages, setPages] = useState(0);
  const { data: clothes } = useGetClothesQuery(null, {});
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
    <div className="bg-dark-gray ">
      <div className="px-0 md:px-40 relative">
        <div className="p-2 my-2 mx-5 flex flex-row justify-between">
          <MySelect
            selectValue={sortValue}
            selectHandler={sortHandler}
            title="Sorted By"
          />
          <MyButton>Filter</MyButton>
        </div>
        <div className="flex md:flex-row flex-col flex-wrap items-center  justify-center mx-5 my-2">
          {sortedList?.map((cloth) => (
            <ClothesItem key={cloth.id} clothes={cloth} />
          ))}
        </div>
        <div className="flex flex-row items-center justify-center my-2 p-2">
          <MyButton>1</MyButton>
          <MyButton>2</MyButton>
          <MyButton>3</MyButton>
          <MyButton>4</MyButton>
          <MyButton>5</MyButton>
        </div>
        <div>
          <NavLink to={`/add`}>
            <button className="fixed right-10 text-[135px] pb-7 bottom-10 bg-mint-green m-2 p-0 h-24 min-h-max min-w-max w-24 rounded-full flex justify-center items-center">
              +
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
