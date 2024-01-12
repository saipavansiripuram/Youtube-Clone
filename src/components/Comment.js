import React from "react";
import { USER_AVATAR } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center shadow-sm bg-gray-50 p-2 rounded-md my-2">
      <img className="w-8 h-8" src={USER_AVATAR} alt="user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="text-sm"> {text}</p>
      </div>
    </div>
  );
};

export default Comment;
