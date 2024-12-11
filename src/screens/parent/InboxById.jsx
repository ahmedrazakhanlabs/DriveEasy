import { ChevronLeft, EllipsisVertical, Paperclip, Pin } from "lucide-react";
import React, { useState } from "react";
import { SphereCircle } from "../../assets";
import { Routes } from "../../utils/Routes";
import { Link, useNavigate } from "react-router-dom";

const Message = ({ message, isSender }) => {
  return (
    <div
      className={`flex flex-col ${
        isSender ? "items-end ml-auto" : "items-start"
      } max-w-[80%]`}
    >
      <div
        className={`rounded-2xl text-[12px] px-4 py-2 ${
          isSender
            ? "bg-purple-4 text-black-1  text-[10px] rounded-xl py-3"
            : "bg-[#F3E8FF] text-purple-1 rounded-xl py-3"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

const InboxById = () => {
  const [messages] = useState([
    // Messages grouped by time
    {
      date: "Four days ago",
      messages: [
        { text: "Yeah. Right! As if that would happen!", isSender: false },
        { text: "Anywho, gotta roll. G'night!", isSender: true },
        { text: "Goodnight!", isSender: false },
      ],
    },
    {
      date: "TODAY",
      messages: [
        { text: "Wassup!!!!!", isSender: true },
        { text: "So what did I miss yesterday?", isSender: true },
        {
          text: "So, while you were gone, a lot has happened. Let me give you a brief!",
          isSender: false,
        },
        {
          text: "Natalie from HR came to our floor looking for Steven. Remember the missing laptop from last week? It was definitely returned to him!",
          isSender: false,
        },
        { text: "You know about this, right?", isSender: false },
        { text: "So what did I miss yesterday?", isSender: true },
        {
          text: "So, while you were gone, a lot has happened. Let me give you a brief!",
          isSender: false,
        },
        {
          text: "Natalie from HR came to our floor looking for Steven. Remember the missing laptop from last week? It was definitely returned to him!",
          isSender: false,
        },
        { text: "You know about this, right?", isSender: false },
      ],
    },
  ]);

  const navigate = useNavigate();
  return (
    <div className="relative bg-white flex flex-col font-Poppins">
      {/* Header */}
      <div className="bg-purple-1 px-4 py-5 flex items-center gap-3 rounded-br-[25px]">
        <img
          src={SphereCircle}
          alt="Infinity Circle"
          className="absolute ml-[-100px] mt-[-150px] z-0 "
        />
        <Link to={Routes.parentInbox} className="text-white z-10">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <div className="flex items-center gap-3 flex-1">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/13404247/pexels-photo-13404247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-bold text-[13px]">Dan Wells</span>
        </div>
        <button className="text-white">
          <EllipsisVertical className="h-5 w-5" />
        </button>
      </div>

      {/* Chat Area */}
      <div
        className="flex-1 overflow-y-auto pb-30 px-4 space-y-6"
        style={{ maxHeight: "calc(100vh - 130px)" }}
      >
        {/* Added maxHeight to ensure the container doesn't overflow */}
        <div>
          {messages.map((chat, index) => (
            <div key={index}>
              {/* Date Header */}
              <div className="text-[10px] text-center font-bold text-gray-700 my-5">
                {chat.date}
              </div>
              <div className="space-y-2">
                {chat.messages.map((msg, idx) => (
                  <Message
                    key={idx}
                    message={msg.text}
                    isSender={msg.isSender}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="md:min-w-[436px] w-[100%] md:w-[50%] lg:w-[30%]  p-4 border-t fixed bottom-0  bg-white z-10">
        {/* Added z-10 to ensure it stays on top */}
        <div className="w-full flex items-center gap-2 ">
          <div className="flex items-center gap-3 w-full  sm:w-[calc(100%-80px)] bg-gray-6 rounded-2xl px-4 py-3">
            <input
              type="text"
              placeholder="Type here..."
              className="flex-1 bg-transparent placeholder:text-black-1 opacity-40 outline-none text-[12px] sm:text-sm"
            />
            <Paperclip className="w-4 h-4 text-black-1 opacity-40" />
          </div>
          <button className="bg-purple-1 text-white px-4 py-3 h-full rounded-full font-medium text-[12px] sm:text-sm sm:px-6 sm:py-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default InboxById;
