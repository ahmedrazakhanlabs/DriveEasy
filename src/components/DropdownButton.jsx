import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import { FilterIcon } from "../utils/Icons";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle item selection
  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick(); // Execute the item's onClick function
    }
    setSelectedItem(item); // Update the selected item
    setIsOpen(false); // Close the dropdown after selection
  };

  // Function to close the dropdown if clicked outside
  const closeDropdown = (e) => {
    if (
      !e.target.closest("#dropdown") &&
      !e.target.closest("#dropdownDefaultButton")
    ) {
      setIsOpen(false);
    }
  };

  // Adding event listener on mount and cleanup on unmount
  React.useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div>
      <Button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        type="button"
        className={
          "justify-center rounded-md font-bold text-[14px] w-full opacity-70 "
        }
        label={
          <>
            <FilterIcon />
            {/* {selectedItem ? selectedItem.label : "Dropdown button"} */}
          </>
        }
      />

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-20 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {/* Dynamically render the list items from props */}
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleItemClick(item)} // Handle item click
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
