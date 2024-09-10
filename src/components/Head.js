import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        getSearchSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - press i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * key - press ip
   * - destroy the component (useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   *
   * setTimeout((200)) - make an api call
   */

  const getSearchSuggestion = async () => {
    console.log("apli call", searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestion(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-6  shadow-lg align-middle sticky top-0 left-0 right-0 z-40  bg-white">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer ps-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="haburger menu"
        />
        <img
          className="h-full w-40 ps-8"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtube logo"
        />
      </div>

      <div className="col-span-10 ">
        <div>
          <input
            className=" w-[550px]  border border-gray-400 py-1 ps-5 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-1 w-[550px] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-1 cursor-pointer hover:bg-gray-100">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="sm"
                    className="px-3"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
