"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/AnimationComponents/AnimatedModal";
import Image from "next/image";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./HoverBorderGradient";

export function AnimatedModalWorking() {
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className=" z-1000  flex items-center justify-center ">
      <Modal>
        <ModalTrigger className="bg-black dark:text-black text-white flex justify-center group/modal-btn">
        <span className="text-white">Audit Now</span>
        </ModalTrigger>
        <ModalBody className="mt-12">
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Audit Your Website With{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                SEOIT
              </span>{" "}
              Now! ✈️
            </h4>
            <div className="flex justify-center items-center mb-8">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
              />
              <input
                type="url"
                placeholder="Website"
                className="w-full px-4 py-2 border rounded-md dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
              />
            </div>
          </ModalContent>
          <ModalFooter className="gap-4 mt-8">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button
              onClick={() => setIsThankYouModalOpen(true)}
              className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
            >
              Audit Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
      {isThankYouModalOpen && (
        <Modal>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Thanks! We received your request. Our team will contact you
                soon.
              </h4>
            </ModalContent>
            <ModalFooter className="flex justify-center">
              <button
                className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black"
                onClick={() => setIsThankYouModalOpen(false)} // Close the modal
              >
                Close
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}
