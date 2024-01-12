import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early retrun
  if (!isMenuOpen) return null;
  return (
    <>
      {/* {!isMenuOpen &&    */}
      <div
        className={`p-5 shadow-lg w-[12rem]${
          isMenuOpen
            ? "translate-x-0 transition-transform delay-1000"
            : "-translate-x-full transition-transform delay-1000"
        }`}
      >
        <ul>
          <Link to="/">
            <li> 🏚️ Home</li>
          </Link>
          <li> 🔥 Shorts</li>
          <li> 📼 Videos</li>
          <li> ䷧ Live</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Movies</li>
          <li>Music</li>
          <li>Artists</li>
          <li>Game</li>
        </ul>
        <h1 className="font-bold">Subsciptions</h1>
        <ul>
          <li>Ram</li>
          <li>Jeena</li>
          <li>Khali</li>
          <li>Ahmed</li>
          <li>Jerry</li>
        </ul>
      </div>
      {/* } */}
    </>
  );
};

export default Sidebar;
