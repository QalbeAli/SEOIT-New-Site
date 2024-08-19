"use client"
import React, { useState } from "react";
import ContactButton from "@/app/contact/_component/ContactButton";

const AddressComponent = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelectedButton(label);
  };

  return (
    <>
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between mx-auto items-center my-12">
        <div className="flex flex-col my-6">
          <div className="flex space-x-2">
            <span className="mr-2 mt-1.5">Main Office</span>{" "}
            <div className="text-3xl">
              901 N PIT STREET <br />{" "}
            </div>
          </div>
          <div className="text-3xl">Alexandria VA, 22314</div>
          <div className="mt-10">
          <ContactButton
            label="INFO@SEOIT.COM"
            onSelect={handleSelect}
            selected={selectedButton === "INFO@SEOIT.COM"}
          />
          </div>
        </div>
        {/* Secong Button Starts Here */}
        <div>
          <div className="flex flex-col">
            <div className="flex space-x-2">
              <span className="mr-2 mt-1.5">Second Office</span>{" "}
              <div className="text-3xl">
                Na Perstyne <br />{" "}
              </div>
            </div>
            <div className="text-3xl">342/1, 11000 Prague</div>
          </div>
          <div className="mt-10">
          <ContactButton
              label="+1234567890"
              onSelect={handleSelect}
              selected={selectedButton === "+1234567890"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressComponent;
