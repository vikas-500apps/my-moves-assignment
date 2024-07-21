import React, { useState } from "react";

const Inventory = ({ inventory }) => {
  const [openIndex, setOpenIndex] = useState(null); // State to manage the currently opened accordion item

  // Handle toggle button
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Format the item name
  const formatItemName = (name, categoryDisplayName) => {
    const formattedName = name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    const words = formattedName.split(" ");

    if (
      words.length > 0 &&
      words[0].toLowerCase() === categoryDisplayName.toLowerCase()
    ) {
      words.shift();
    }
    return words.join(" ");
  };

  const renderInventory = () => {
    return inventory.map((invent, inventIndex) => (
      <div key={inventIndex} className="accordion-item rounded-b-none mb-2">
        {/* Start of inventory */}
        <button
          type="button"
          className={`bg-gray-100 border border-gray-200 duration-300 flex items-center justify-between p-4 rounded-[8px] transition-transform w-full ${
            openIndex === inventIndex ? "rounded-t-[8px]" : "rounded-b-[8px]"
          }`}
          onClick={() => handleToggle(inventIndex)}
          aria-expanded={openIndex === inventIndex}
        >
          {/* Inventory name and category length */}
          <span className="flex items-center">
            <span className="accordion-title text-orange-600 md:text-base text-sm text-left">
              {invent.displayName}
            </span>
            <span className="bg-orange-600 text-white flex items-center justify-center w-6 h-6 rounded-full ml-2 text-xs font-semibold">
              {invent.category.length}
            </span>
          </span>
          <i
            className={`fas fa-chevron-down text-neutral-700 transform transition-transform duration-200 ${
              openIndex === inventIndex ? "rotate-180" : ""
            }`}
          ></i>
        </button>
        <div
          className={`accordion-content bg-gray-50 transition-all duration-300 ease-in-out p-4 rounded-b-[8px] border-t-0 border border-gray-200 ${
            openIndex === inventIndex ? "" : "hidden"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {invent.category.map((category, catIndex) => (
              <div key={catIndex} className="mb-4">
                {/* Category displayName */}
                <h4 className="text-md font-semibold text-neutral-800 mb-2">
                  {category.displayName}
                </h4>
                <ul className="space-y-1">
                  {/* Iterate  category list */}
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-neutral-700 text-[15px]"
                    >
                      <div className="flex justify-between items-center font-medium">
                        <span>
                          {formatItemName(item.name, category.displayName)}
                        </span>
                        <span className="ml-2 w-12 text-right">
                          {item.order}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="ml-4">
      <h3 className="font-semibold text-lg mb-4">
        Inventory Details
        <button className="bg-gray-800 text-white py-2 px-4 rounded ml-4">
          Edit Inventory
        </button>
      </h3>

      <div className="accordion grid grid-cols-1 gap-5">
        {renderInventory()}
      </div>
    </div>
  );
};

export default Inventory;
