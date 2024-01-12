import React, { useEffect, useState } from "react";
import {
  HAMBERGER_ICON,
  USER_AVATAR,
  YOUTUBE_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toogleMenuhandler = () => {
    dispatch(toggleMenu());
  };

  const handleScroll = () => {
    setshowSuggestions(false);
  };
  return (
    <div
      className="grid grid-flow-col p-4 m-2 shadow-lg items-center  justify-items-center"
      onScroll={handleScroll}
    >
      <div className="flex items-center col-span-1 ">
        <img
          onClick={() => toogleMenuhandler()}
          className="cursor-pointer h-4 mx-2 "
          src={HAMBERGER_ICON}
          alt="hamberger"
        />
        <a href="/">
          <img className="h-8 mx-4 " src={YOUTUBE_ICON} alt="logo" />
        </a>
      </div>
      <div className="col-span-12 px-10   ">
        <div>
          <input
            className=" w-96 p-2 border border-gray-200 px-5 py-2 rounded-l-full shadow-lg"
            placeholder=" Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <button className="border border-gray-200 p-2 px-4 rounded-r-full bg-gray-200 shadow-lg">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className=" fixed bg-white py-2 px-3 w-[24rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                  {" "}
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img className="w-8" src={USER_AVATAR} alt="user-avatar" />
      </div>
    </div>
  );
};

export default Header;
