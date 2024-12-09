import React from "react";

const GearLines = () => {
  return (
    <div className="flex items-center justify- w-full ml-3">
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-shrink-0 my-2"
            style={{ flex: "1 1 auto", minWidth: "0" }}
          >
            {/* Circle */}
            <p
              className="font-MonsterratBold  border-2 border-purple-1 rounded-full flex justify-center items-center"
              style={{
                flexShrink: 1,
                width: "calc(5% + 10px)",
                height: "calc(5% + 10px)",
                fontSize: "calc(9px)",
                textAlign: "center",
                minWidth: "20px",
                minHeight: "20px",
                maxWidth: "50px",
                maxHeight: "50px",
              }}
            >
              {index + 1}
            </p>

            {/* Bar */}
            {index < 4 && (
              <div
                className="bg-gray-200 rounded-full mx-2"
                style={{
                  flexGrow: 1,
                  height: "10px",
                  minWidth: "20px",
                  maxWidth: "100px",
                }}
              ></div>
            )}
          </div>
        ))}
    </div>
  );
};

export default GearLines;
