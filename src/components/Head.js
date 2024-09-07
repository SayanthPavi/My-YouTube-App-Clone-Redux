import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg align-middle">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="haburger menu"
        />
        <img
          className="h-10 mx-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
          alt="youtube logo"
        />
      </div>

      <div className="col-span-10 text-center">
        <input
          className=" w-[550px]  border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User logo"
        />
      </div>
    </div>
  );
};

export default Head;
