import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandom, generateRandomSentence } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandom(),
          // message: makeRandomMessage(30) + "😄",
          message: generateRandomSentence(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[515px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        <div>
          {/* <ChatMessage name="Sai" message="Hey , You are Wrong! May I help you" /> */}
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border  border-black rounded-lg flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sai",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="ml-2 px-2 w-94 border border-black rounded-2xl"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-red-300 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
