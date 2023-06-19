import { NavLink } from "react-router-dom";
import cartIcon from "../assets/image/cart.svg";
import logo from "../assets/image/logo.svg";
import menu from "../assets/image/menu.svg";
import searchIcon from "../assets/image/search.svg";
import MyButton from "./UI/MyButton";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Header = () => {
  const { cart } = useTypedSelector((state) => state);

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

          <div className="flex items-center">
            <div>
              <NavLink to="/signin">
                <MyButton>Sign In</MyButton>
              </NavLink>
            </div>
            <div className="relative">
              <NavLink to="/cart">
                <img src={cartIcon} alt="Cart" className="h-9" />
                <span className="absolute text-[17px] font-bold -top-2 -right-2 text-black bg-mint-green rounded-full px-2">
                  {cart.length}
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
          <span className="text-[18px] text-white ">All Category</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
