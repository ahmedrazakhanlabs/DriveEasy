"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
export default function DynamicTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="border-b border-gray-200">
        <nav
          className="relative flex justify-center items-center overflow-scroll p-1"
          aria-label="Tabs"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`
              relative z-10 px-1 py-2 text-[2.5vw] sm:text-xs font-medium font-Monsterrat transition-colors duration-300 ease-in-out
              ${
                activeTab === index
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }
            `}
              style={{ width: `${100 / tabs.length}%` }}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-purple-1 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.title}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-8">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              y: activeTab === tab.id ? 0 : 100,
            }}
            transition={{ duration: 0.5 }}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
