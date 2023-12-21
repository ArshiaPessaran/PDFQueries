import React, { useState } from "react";

import NavBar from "../Components/NavBar";
import FileUpload from "../Components/FileUpload";

import arrow from "../assets/right-arrow.svg";
import bolt from "../assets/bolt.svg";
import upload from "../assets/upload-doc.svg";
import circle from "../assets/circle.svg";
import fileIcon from "../assets/file.svg";

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

function FileBubble({ name }) {
  return (
    <div className="flex mb-7">
      <img src={fileIcon} className="w-3 ml-auto" />
      <p className="ml-2 mr-5">{name}</p>
    </div>
  );
}

export default function () {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [userInput, setUserInput] = useState("");

  const [conversation, setConversation] = useState([
    <ChatBubbleAI Text="Hello, I'm Doc Chat ⚡! Your AI personal assistant here to assist you with all your document needs. How can I assist you?" />,
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
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <div className="ml-3">
            <img
              src={arrow}
              alt="right-arrow"
              className="w-4 cursor-pointer self-start mt-1.5"
              onClick={async () => {
                setConversation((prev) => [
                  ...prev,
                  <ChatBubbleUser Text={userInput} />,
                  <LoadBubble />,
                ]);

                const user_input = userInput;
                setUserInput("");

                const res = await fetch("api/chat/text-input", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    user_input: user_input,
                  }),
                });

                const data = await res.json();

                setConversation((prev) => {
                  const updatedConversation = prev.slice(0, -1);
                  return [
                    ...updatedConversation,
                    <ChatBubbleAI Text={data.response} />,
                  ];
                });
              }}
            />
            <img
              src={upload}
              alt="upload-doc"
              onClick={() => setIsUploading(true)}
              className="mt-3 w-4 cursor-pointer self-start mt-1.5"
            />
          </div>
        </div>
      </div>
      {isUploading && (
        <FileUpload
          onClose={() => {
            setIsUploading(false);
            setFiles([]);
          }}
          onUpload={async () => {
            setIsUploading(false);

            setConversation((prev) => [
              ...prev,
              ...files.map((file) => <FileBubble name={file.name} />),
              <LoadBubble />,
            ]);

            const formData = new FormData();
            files.forEach((file) => formData.append("file", file));

            const res = await fetch("api/chat/file-input", {
              method: "POST",
              body: formData,
            });

            const data = await res.json();

            console.log(data);

            setConversation((prev) => {
              const updatedConversation = prev.slice(0, -1);
              return [
                ...updatedConversation,
                <ChatBubbleAI Text={data.response} />,
              ];
            });

            setFiles([]);
          }}
          files={files}
          setFiles={setFiles}
        />
      )}
    </div>
  );
}
