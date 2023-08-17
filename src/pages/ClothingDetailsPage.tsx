import React from "react";
import { useParams } from "react-router-dom";
import { useGetClotheByIdMutation } from "../store/reducers/clothes.api";
import { useEffect } from "react";
import MyButton from "./../components/UI/MyButton";
import MySelect from "./../components/UI/MySelect";

const ClothingDetailsPage = () => {
  const { id } = useParams();
  const [getClothesById, { data: clothing }] = useGetClotheByIdMutation();

  const colorValue = [
    { value: "black", title: "Black" },
    { value: "white", title: "White" },
    { value: "red", title: "Red" },
  ];

  const sizeValue = [
    { value: "s", title: "S" },
    { value: "m", title: "M" },
    { value: "l", title: "L" },
  ];

  useEffect(() => {
    getClothesById(Number(id));
  }, [id]);

  return (
    <div className="mx-2 md:mx-40">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="relative p-2 h-[430px]">
          <img
            src={clothing?.image}
            alt={clothing?.image}
            className=" w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-around">
          <h1 className="text-center text-white text-2xl">{clothing?.title}</h1>
          <h2 className="text-white text-center md:text-left font-bold text-xl">
            ${clothing?.price}
          </h2>
          <div>
            <MySelect selectValue={colorValue} title="Color" />
            <MySelect selectValue={sizeValue} title="Size" />
          </div>

          <MyButton>В корзину</MyButton>

          <div>
            <h2>Description</h2>
            <h3>{clothing?.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingDetailsPage;
