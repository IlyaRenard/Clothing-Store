import { FC, FormEvent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/image/cart.svg";
import logo from "../assets/image/logo.svg";
import menu from "../assets/image/menu.svg";
import searchIcon from "../assets/image/search.svg";
import { useGetCartQuery } from "../store/reducers/cart.api";
import {
  useGetClothesQuery,
  useSearchByTitleMutation,
} from "../store/reducers/clothes.api";
import { useGetFavoriteQuery } from "../store/reducers/favorite.api";
import { IUser } from "../types/User";
import MyButton from "./UI/MyButton";

const Header: FC = () => {
  const user: IUser = {
    id: 1,
    username: "Ilya",
    email: "ilya.gavrilik.1998@gmail.com",
    password: "8852785Ilya",
  };
  const { data: cart } = useGetCartQuery(user, {});
  const { data: favorite } = useGetFavoriteQuery(user, {});
  const { data: clothes } = useGetClothesQuery(null, {});
  const [searchClothes, { data: searchClothesList }] =
    useSearchByTitleMutation();
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const dropDownHandler = () => {
    setOpen(!open);
  };

  const dropDownCategoryhandler = () => {
    setOpenCategory(!openCategory);
  };

  useEffect(() => {
    if (searchQuery.length >= 2) searchClothes(searchQuery);
  }, [searchQuery]);

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <header>
      <nav className="bg-dark-gray px-4 lg:px-6 py-2.5 shadow-md">
        <div className="flex flex-wrap justify-between items-center relative">
          <a href="/" className="flex items-center">
            <span className="text-white mr-2 text-[20px] md:block hidden">
              Clothes store
            </span>
            <img src={logo} className="mr-3 h-9 sm:h-9" alt="Logo" />
          </a>
          <form className="h-full w-[50%] flex" onSubmit={searchHandler}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-none outline-none rounded-l-md py-2 px-3 text-white bg-light-gray"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="rounded-r-md p-2 bg-purple-peril" type="submit">
              <img src={searchIcon} alt="search" className="h-7" />
            </button>
          </form>

          {searchQuery && (
            <div className="absolute box-border md:top-28 top-36 md:left-[26%] left-[10%]  bg-light-gray p-2 flex flex-col z-50 w-auto">
              {searchClothesList?.map((cloth) => (
                <NavLink to={`/clothes/${cloth.id}`}>
                  <div
                    className="p-2 mb-2 flex flex-row justify-center bg-dark-gray"
                    onClick={() => setSearchQuery("")}
                  >
                    <img
                      src={cloth.image}
                      alt={cloth.image}
                      className="h-auto w-20"
                    />
                    <h2
                      key={cloth.id}
                      className=" h-full   w-full text-white text-xl hover:text-mint-green cursor-pointer"
                    >
                      {cloth.title}
                    </h2>
                  </div>
                </NavLink>
              ))}
            </div>
          )}

          <div className="flex items-center  mr-7">
            <div className="relative">
              <MyButton onClick={dropDownHandler}>Войти</MyButton>

              {open && (
                <div className="flex flex-col absolute  top-14 md:right-0 left-1 bg-light-gray w-fit z-50 p-1">
                  <a
                    href="/signin"
                    className=" p-3 shadow-md hover:text-mint-green w-full inline-block"
                  >
                    Войти
                  </a>

                  <a
                    href="/favorite"
                    className=" p-3 shadow-md hover:text-mint-green w-full inline-block whitespace-nowrap"
                  >
                    Избранное:
                    <span className="ml-1 font-bold">{favorite?.length}</span>
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <NavLink to="/cart">
                <img src={cartIcon} alt="Cart" className="h-9 " />
                <span className="absolute text-[17px] font-bold -top-2 -right-2 text-black bg-mint-green rounded-full px-2">
                  {cart?.length}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-dark-gray px-4 lg:px-6 py-1 shadow-md">
        <div className="flex flex-wrap justify-start items-center ml-2 max-w-screen-xl relative">
          <button onClick={() => dropDownCategoryhandler()}>
            <img src={menu} alt="menu" className="h-8 mr-2" />
          </button>
          <span className="text-[18px] text-white ">Все категории</span>

          <div
            className={`absolute -left-5 top-12 flex flex-col z-50 bg-dark-gray ease-in-out duration-500 ${
              !openCategory ? "-translate-x-96" : "translate-x-0"
            }`}
          >
            {clothes?.map((cloth) => (
              <a
                key={cloth.id}
                href=""
                className="p-2 w-[250px] h-full mx-3 mb-2 shadow-lg"
              >
                {cloth.category}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
