import React from "react";

const videoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 mx-4 w-64 shadow-md rounded-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumb" />
      <ul>
        <li className="font-bold text-sm py-2">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} views </li>
      </ul>
    </div>
  );
};

export default videoCard;
