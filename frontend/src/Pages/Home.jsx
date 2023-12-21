import React, { useState } from "react";

import NavBar from "../Components/NavBar";

import arrow from "../assets/right-arrow.svg";
import bolt from "../assets/bolt.svg";
import upload from "../assets/upload-doc.svg";
import circle from "../assets/circle.svg";

function ChatBubbleUser({ Text }) {
  return <p className="text-right mr-5 pl-32 mb-7">{Text}</p>;
}

function ChatBubbleAI({ Text }) {
  return (
    <div className="flex flex-row space-x-2.5 pr-32 mb-7">
      <img src={bolt} className="pt-1.5 self-start" />
      <p>{Text}</p>
    </div>
  );
}

function LoadBubble() {
  return (
    <div className="flex flex-row space-x-2.5 pr-32 mb-7">
      <img src={bolt} />
      <div className="flex pr-32 animate-pulse">
        <img src={circle} className="w-2 ml-1" />
        <img src={circle} className="w-2 ml-1" />
        <img src={circle} className="w-2 ml-1" />
      </div>
    </div>
  );
}

export default function () {
  const [conversation, setConversation] = useState([
    <ChatBubbleAI Text="Hello, how are you?" />,
    <ChatBubbleUser Text="I'm good, how are you?" />,
    <ChatBubbleAI Text="Magna enim deserunt mollit incididunt est culpa minim labore enim laboris culpa." />,
    <ChatBubbleUser Text="Deserunt nisi non non sunt sit ut eu elit labore Lorem adipisicing tempor sunt fugiat. Non occaecat culpa cupidatat aliquip consectetur et in nostrud ullamco adipisicing. Culpa commodo commodo culpa irure." />,
    <LoadBubble />,
  ]);

  return (
    <div>
      <NavBar />
      <div className="w-screen lg:w-[50vw] 2xl:w-[30vw] mx-auto mt-[10vh] ">
        <div className="border rounded p-8 h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          {conversation}
        </div>
        <div className="w-full mt-5 flex">
          <textarea
            rows={3}
            className="w-full resize-none"
            placeholder="Enter Prompt"
          />
          <div className="ml-3">
            <img
              src={arrow}
              alt="right-arrow"
              className="w-4 cursor-pointer self-start mt-1.5"
            />
            <img
              src={upload}
              alt="upload-doc"
              className="mt-3 w-4 cursor-pointer self-start mt-1.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
