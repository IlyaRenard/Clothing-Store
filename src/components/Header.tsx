import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/image/cart.svg";
import logo from "../assets/image/logo.svg";
import menu from "../assets/image/menu.svg";
import searchIcon from "../assets/image/search.svg";
import { useGetCartQuery } from "../store/reducers/cart.api";
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
  const [open, setOpen] = useState(false);

  const dropDownHandler = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav className="bg-dark-gray px-4 lg:px-6 py-2.5 shadow-md">
        <div className="flex flex-wrap justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-white mr-2 text-[20px] md:block hidden">
              Clothes store
            </span>
            <img src={logo} className="mr-3 h-9 sm:h-9" alt="Logo" />
          </a>
          <div className="h-full w-[50%] flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-0 outline-none rounded-l-md py-2 px-3 text-white bg-light-gray"
            />
            <button className="rounded-r-md p-2 bg-purple-peril">
              <img src={searchIcon} alt="search" className="h-7" />
            </button>
          </div>

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
        <div className="flex flex-wrap justify-start items-center ml-2 max-w-screen-xl">
          <button>
            <img src={menu} alt="menu" className="h-8 mr-2" />
          </button>
          <span className="text-[18px] text-white ">Все категории</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
