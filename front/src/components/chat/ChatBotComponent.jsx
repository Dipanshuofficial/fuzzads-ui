import { BsTrash } from "react-icons/bs";
import { TbLayoutBottombarCollapseFilled } from "react-icons/tb";
import { IoSend } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";
import { PiMagicWandBold } from "react-icons/pi";

import "./chat.css";
import Chat from "./Chat";
import { useState } from "react";

const ChatBotComponent = () => {
  const [collapse, setCollapse] = useState(true);
  if (!collapse) {
    return (
      <div className="flex flex-col fixed bg-white w-[25vw] h-[80vh] right-10 bottom-10 rounded-3xl shadow-lg shadow-black z-[1000] scale-up-ver-bottom">
        <header className="flex justify-between p-5 sticky top-0 bg-white z-10 rounded-3xl">
          <BsTrash
            title="Clear History"
            className="w-7 h-7 text-black cursor-pointer"
          />
          <h1
            title="AI Bot To Guide You On Some Queries."
            className="text-2xl font-semibold"
          >
            Fuzzy
          </h1>
          <TbLayoutBottombarCollapseFilled
            title="Collapse Chat"
            className="w-7 h-7 text-black cursor-pointer"
            onClick={() => {
              setCollapse(true);
            }}
          />
        </header>
        <main className="flex-1 overflow-y-scroll">
          <Chat client={true} message="Who Am I?" />
          <Chat />
          <Chat client={true} message="Who Am I?" />
          <Chat />
          <Chat client={true} message="Who Am I?" />
          <Chat />
          <Chat client={true} message="Who Am I?" />
          <Chat />
        </main>
        <footer className="flex justify-between p-5 items-center sticky bottom-0 bg-white z-10 rounded-3xl">
          <textarea
            name="message"
            id="msg"
            placeholder="Write Your Query Here."
            className="bg-gray-300 rounded-3xl resize-none overflow-hidden py-4 pl-4 pr-14 flex-1 border-black border"
            maxLength={50}
            rows={1}
            style={{ minHeight: "3rem", lineHeight: "1.5rem" }}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
          <button className="z-10 absolute right-8 bg-gray-400 p-3 rounded-full hover:bg-gray-500">
            <IoSend className="text-black" />
          </button>
        </footer>
      </div>
    );
  } else {
    return (
      <Collapsed
        onClick={() => {
          setCollapse(false);
        }}
      />
    );
  }
};
import PropTypes from "prop-types";
const Collapsed = ({ onClick }) => {
  return (
    <div
      className="fixed z-[1000] bg-white right-10 bottom-10 p-5 w-[25vw] h-[6.5vh] rounded-full shadow-lg shadow-black flex items-center justify-center gap-x-10 text-black cursor-pointer"
      onClick={onClick}
    >
      <BsChatSquareText className="w-5 h-5" />
      <span className="">Ask Fuzzy!</span>
      <PiMagicWandBold className="w-5 h-5" />
    </div>
  );
};
Collapsed.propTypes = {
  onClick: PropTypes.func,
};
export default ChatBotComponent;
