import React, { useState } from "react";
import Chart from "react-apexcharts";

const RadialBarChart = ({ series }) => {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 2, // Apply the top shadow offset
            left: 2, // Apply the left shadow offset
            blur: 15, // Set blur
            opacity: 1, // Set opacity to 1 for full visibility
            color: "#f5f2fc", // Use the desired color
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0,
          dropShadow: {
            enabled: true,
            top: 2, // Apply the top shadow offset
            left: 2, // Apply the left shadow offset
            blur: 15, // Set blur
            opacity: 1, // Set opacity to 1 for full visibility
            color: "rgba(106,44,249,1)", // Use the desired color
          },
        },
        dataLabels: {
          show: true, // Show value (percentage)
          name: {
            show: false, // Hide label text
          },
          value: {
            formatter: function (val) {
              return `${parseInt(val)}%`; // Show value as percentage
            },
            color: "#111",
            fontSize: "17px",
            fontFamily: "Monsterrat-bold, sans-serif",
            textAnchor: "middle", // Horizontally center the text
            offsetY: 8,
            show: true,
          },
        },
      },
    },
    fill: {
      colors: "#6A2CF9",
    },
    stroke: {
      lineCap: "round",
    },
    labels: [], // Remove the default labels like "Percent"
    annotations: {
      points: series.map((value, index) => {
        const angle = -135 + (225 * value) / 100;
        const radius = 50; // Adjust radius as needed
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180); // Horizontal position
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180); // Vertical position

        return {
          x: `${x}%`,
          y: `${y}%`,
          marker: {
            size: 8, // Size of the circle marker
            fillColor: "#FF0000", // Visible red color for the marker
            shape: "circle", // Circle shape
          },
        };
      }),
    },
  });

  return (
    <div>
      <Chart options={options} series={series} type="radialBar" height={120} />
    </div>
  );
};

export default RadialBarChart;
