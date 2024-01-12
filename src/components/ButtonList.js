import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Game",
    "Soccer",
    "Sas",
    "Movies",
    "Music",
    "Art",
    "News",
    "Cooking",
    "Drama",
    "Fe",
    "Iron",
    "Maya",
    "Drama",
    "Fe",
    "Iron",
    "Joker",
  ];

  return (
    <div className="flex overflow-x-scroll">
      {list.map((li, index) => (
        <Button key={index} name={li} />
      ))}
    </div>
  );
};

export default ButtonList;
