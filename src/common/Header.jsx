import { useContext } from "react";
import { IoCartOutline, IoMenu, IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { MainContext } from "../context/MainContext";

export const Header = () => {
  const { cartCount } = useContext(MainContext);
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white px-4 py-3 shadow-md">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr]">
        <button className="text-2xl md:hidden">
          <IoMenu />
        </button>
        <figure className="w-full max-w-[150px]">
          <Link to={"/"}>
            <img src="images/logo.svg" alt="logo" />
          </Link>
        </figure>
        <nav className="hidden items-center justify-between md:flex">
          <ul className="flex items-center gap-5 text-lg font-medium">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/checkout"}
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-3">
          <button className="text-2xl">
            <IoSearch />
          </button>
          <Link to={"/cart"} className="relative text-2xl">
            <IoCartOutline />
            <span className="absolute -right-2 -top-[10px] size-5 rounded-full bg-black text-center text-[11px] leading-[1.25rem] text-white">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
