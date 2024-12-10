import React from "react";

const InboxById = () => {
  return (
    <div>
      <div className="max-w-md mx-auto h-[600px] bg-white flex flex-col font-Poppins">
        {/* Header */}
        <div className="bg-purple-1 px-4 py-3 flex items-center gap-3 rounded-br-[25px]">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="/placeholder.svg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-medium">Dan Wells</span>
          </div>
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Four days ago */}
          <div className="text-xs text-center text-gray-500">Four days ago</div>
          <div className="space-y-2">
            <div className="flex flex-col items-start max-w-[80%]">
              <div className="bg-[#F3E8FF] text-purple-1 rounded-2xl rounded-tl-sm px-4 py-2 text-[12px]">
                Yeah. Right! As if that would happen!
              </div>
            </div>
            <div className="flex flex-col items-end max-w-[80%] ml-auto">
              <div className="bg-purple-4  text-black-1 rounded-2xl rounded-tr-sm px-4 py-2 text-[12px] ">
                Anywho, gotta roll. G'night!
              </div>
            </div>
            <div className="flex flex-col items-start max-w-[80%]">
              <div className="bg-[#F3E8FF] text-purple-1 rounded-2xl rounded-tl-sm px-4 py-2 text-[12px]">
                Goodnight!
              </div>
            </div>
          </div>

          {/* Today */}
          <div className="text-xs text-center text-gray-500">TODAY</div>
          <div className="space-y-2">
            <div className="flex flex-col items-end max-w-[80%] ml-auto">
              <div className="bg-purple-4  text-black-1 rounded-2xl rounded-tr-sm px-4 py-2 text-[12px] ">
                Wassup!!!!!
              </div>
            </div>
            <div className="flex flex-col items-end max-w-[80%] ml-auto">
              <div className="bg-purple-4  text-black-1 rounded-2xl rounded-tr-sm px-4 py-2 text-[12px] ">
                So what did I miss yesterday?
              </div>
            </div>
            <div className="flex flex-col items-start max-w-[80%]">
              <div className="bg-[#F3E8FF] text-purple-1 rounded-2xl rounded-tl-sm px-4 py-2 text-[12px]">
                So, while you were gone, a lot has happened. Let me give you a
                brief!
              </div>
            </div>
            <div className="flex flex-col items-start max-w-[80%]">
              <div className="bg-[#F3E8FF] text-purple-1 rounded-2xl rounded-tl-sm px-4 py-2 text-[12px]">
                Natalie from HR came to our floor looking for Steven. Remember
                the missing laptop from last week? It was definitely returned to
                him!
              </div>
            </div>
            <div className="flex flex-col items-start max-w-[80%]">
              <div className="bg-[#F3E8FF] text-purple-1 rounded-2xl rounded-tl-sm px-4 py-2 text-[12px]">
                You know about this, right?
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Type here..."
              className="flex-1 bg-transparent outline-none text-[12px]"
            />
            <button className="text-[#7C3AED] font-medium text-[12px]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxById;
