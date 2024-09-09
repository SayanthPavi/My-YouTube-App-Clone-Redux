import React from "react";
import { useSelector } from "react-redux";
// import store from "../Utils/store";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  return !isMenuOpen ? null :(
    <div className="w-48 h-full ps-7 pe-8 pt-8 shadow-lg fixed left-0  bg-white">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-6">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-6">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
