import { Link } from "react-router-dom";
import Logo from "./Logo";
import Profil from "../assets/user.jpg";
import { Bookmark, MenuSquare, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="bg-white drop-shadow-gray-200">
      <div className="flex justify-between place-items-center py-2 mx-5 md:mx-10 ">
        <Logo />

        <div className="hidden md:flex gap-4 place-items-center text-(--text-secondary) font-light ">
          <Link to="" className="text-sm ">
            Mes candidatures
          </Link>
          <Link
            to="/favoris"
            className="p-1 bg-[#8DCBF4] flex items-center justify-center rounded"
          >
            <Bookmark size={18} />
          </Link>

          <div className="flex gap-2 place-items-center">
            <img
              src={Profil}
              alt="Profil utilisateur"
              width={24}
              height={24}
              className="rounded-full "
            />
            <span>Allassane</span>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(true)}>
            <MenuSquare className="text-white" />
          </button>

          <div
            className={`fixed z-50 top-0 left-0 w-screen h-screen bg-white shadow ${
              openMenu ? "translate-0" : "-translate-x-full"
            } duration-400  transition-all`}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <Logo />
              <button
                onClick={() => setOpenMenu(false)}
                className="absolute top-5 right-5"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-6 py-10 text-gray-800">
              <Link to="" className="text-lg font-medium active:opacity-75 ">
                Mes candidatures
              </Link>
              <Link to="" className="text-lg font-medium active:opacity-75">
                Mes favoris
              </Link>
              <Link to="" className="text-lg font-medium active:opacity-75">
                Mon profil
              </Link>
            </nav>

            <div className="absolute bottom-0 left-0 w-full px-6 py-5 border-t border-gray-200">
              <div className="flex gap-2 place-items-center">
                <img
                  src={Profil}
                  alt="Profil utilisateur"
                  width={24}
                  height={24}
                  className="rounded-full "
                />
                <span>Allassane</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
