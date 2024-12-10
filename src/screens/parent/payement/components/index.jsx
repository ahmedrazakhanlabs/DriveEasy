import React from "react";

export const Pay = () => {
  const PayData = [
    {
      image:
        "https://images.pexels.com/photos/28257012/pexels-photo-28257012/free-photo-of-a-man-with-glasses-holding-a-camera-near-a-river.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ole Lueilwitz",
      date: "7-jun-2022 ● 12:00 PM",
      payement: "23$",
    },
    {
      image:
        "https://images.pexels.com/photos/4584095/pexels-photo-4584095.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Carolyn Grimes",
      date: "7-jun-2022 ● 12:00 PM",
      payement: "23$",
    },
    {
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Josiah Lueilwitz",
      date: "7-jun-2022 ● 12:00 PM",
      payement: "23$",
    },
  ];
  return (
    <div>
      <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
        Recent Activity
      </p>
      {PayData.map((item, index) => (
        <div className="flex justify-between items-center bg-purple-2 p-2 rounded-lg my-4">
          <div className="flex items-center gap-3">
            <div>
              <img
                src={item.image}
                className="w-[80px] h-[80px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-MonsterratBold text-[4vw] sm:text-[17px]">
                {item.name}
              </h1>
              <p className="font-semibold text-[4vw] sm:text-[10px] text-gray-800">
                {item.date.split("●")[0]}{" "}
                <span className="text-black-1">●</span>{" "}
                {item.date.split("●")[1]}
              </p>
            </div>
          </div>
          <div className="text-purple-1 font-MonsterratBold text-lg md:text-2xl px-3">
            {item.payement}
          </div>
        </div>
      ))}
    </div>
  );
};
