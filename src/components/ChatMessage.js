import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm ">
      <img
        className="h-9 mt-2 rounded-3xl"
        src="https://yt4.ggpht.com/dEUoGXOrAeZPFTBfuYZrET-qJsxO2lWTvlSEWJlBQT00J56PWcAxvMBBdTQPyAlHiLMrurwIYPE=s64-c-k-c0x00ffffff-no-rj"
        alt="chat"
      />
      <span className="px-2 font-bold">{name}</span>
      <span className="font-extralight text-xs">{message}</span>
    </div>
  );
};

export default ChatMessage;
