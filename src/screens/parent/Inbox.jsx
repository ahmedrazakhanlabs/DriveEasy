const chats = [
  {
    id: 1,
    name: "Dan Wells",
    message: "Have you sent the updated...",
    time: "Just now",
    avatar:
      "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    notifications: 2,
  },
  {
    id: 2,
    name: "Will Wade",
    message: "You know this right?",
    time: "1 minute ago",
    avatar:
      "https://images.pexels.com/photos/15894901/pexels-photo-15894901/free-photo-of-man-with-mustache-and-beard.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    notifications: 0,
  },
  {
    id: 3,
    name: "Beverly Gray",
    message: "You should have seen her face whe...",
    time: "3 minutes ago",
    avatar:
      "https://images.pexels.com/photos/8605800/pexels-photo-8605800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    notifications: 0,
  },
  {
    id: 4,
    name: "Rebecca Young",
    message: "Sent an image.",
    time: "2 days ago",
    avatar:
      "https://images.pexels.com/photos/13404247/pexels-photo-13404247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    notifications: 1,
  },
  {
    id: 5,
    name: "Laurel Hughes",
    message: "Sent a document.",
    time: "2 days ago",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=4",
    notifications: 1,
  },
];
import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes";
import { ChevronLeft } from "lucide-react";
import Button from "../../components/Button";

const Inbox = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="flex justify-center items-center mx-4  my-3">
        <button
          onClick={() => navigate(Routes.parentHome)}
          className="p-2 absolute left-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div></div>
        <div className="flex justify-center items-center">
          <h1 className="text-lgl text-center font-semibold">Inbox</h1>
        </div>

        <div className="p-2 absolute right-2 rounded-full hover:bg-gray-100">
          <button className="bg-purple-1  text-center text-[12px] rounded-full px-3 py-1 text-white">
            Send
          </button>
        </div>
      </div>
      <div className="px-10 py-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-8 pr-4 text-sm bg-gray-50 rounded-md focus:outline-none "
          />
          <svg
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <div className="absolute right-2 top-2.5">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        {chats.map((chat) => (
          <div key={chat.id}>
            <div className="flex items-center gap-3 p-4 hover:bg-gray-50">
              <div className="flex-shrink-0">
                <img
                  src={chat.avatar}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="font-Poppins text-[13px] font-bold text-gray-900">
                    {chat.name}
                  </p>
                  <div className="absolute right-5">
                    <p className="font-Poppins text-[10px] font-semibold text-gray-500">
                      {chat.time}
                    </p>
                    {chat.notifications > 0 && (
                      <div className="flex-shrink- text-right">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-purple-1 text-xs font-medium text-white">
                          {chat.notifications}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="font-Poppins text-[10px] opacity-65 font-bold  truncate">
                  {chat.message}
                </p>
              </div>
            </div>
            <div className=" border-t border-gray-200 mx-12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
