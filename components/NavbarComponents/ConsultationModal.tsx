import { FC, useState } from "react";
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"questions" | "information">(
    "questions"
  );

  if (!isOpen) return null;

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleOuterClick}
    >
      <div
        className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex">
          <div className="w-1/2 hidden md:flex">
            {activeTab === "questions" && (
              <div className="relative w-full h-full">
                <Image
                  src="/contact.webp"
                  alt="Consultation"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            )}
            {activeTab === "information" && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.013948980032!2d-122.420679!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1b4ab113%3A0x4c17d1511f54b47d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1628708820184!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                title="San Francisco Map"
                className="object-cover h-full w-full"
              ></iframe>
            )}
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col min-h-[500px] justify-center items-center">
            <div className="flex space-x-4 mb-4 border-b">
              <button
                className={`text-lg font-semibold pb-2 border-b-2 ${
                  activeTab === "questions"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-400"
                }`}
                onClick={() => setActiveTab("questions")}
              >
                Questions
              </button>
              <button
                className={`text-lg font-semibold pb-2 border-b-2 ${
                  activeTab === "information"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-400"
                }`}
                onClick={() => setActiveTab("information")}
              >
                Information
              </button>
            </div>
            <div className="flex-1 flex flex-col">
              {activeTab === "questions" && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <p className="mb-4 text-gray-600">
                    Any questions or remarks? We&apos;ll get back to you within 24
                    hours.
                  </p>
                  <form className="space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                      <UserIcon className="h-5 w-5 text-blue-500 mr-3" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="bg-transparent outline-none text-gray-700 w-full"
                      />
                    </div>
                    <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                      <MailIcon className="h-5 w-5 text-blue-500 mr-3" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-transparent outline-none text-gray-700 w-full"
                      />
                    </div>
                    <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="bg-transparent outline-none text-gray-700 w-full"
                      />
                    </div>
                    <textarea
                      className="bg-gray-100 p-4 rounded-lg shadow-md w-full flex-1"
                      rows={4}
                      placeholder="Enter your message"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
              {activeTab === "information" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    Contact Details
                  </h2>
                  <p className="mb-4 text-gray-600 text-center">
                    Have some feedback for us?
                  </p>
                  <p className="mb-4 text-gray-600 text-center">
                    Give us a call or send an email.
                  </p>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center text-gray-700">
                      <PhoneIcon className="h-5 w-5 text-blue-500 mr-3" />
                      <span>+123 (4567) 8910</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MailIcon className="h-5 w-5 text-blue-500 mr-3" />
                      <span>hello@example.com</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <LocationMarkerIcon className="h-5 w-5 text-blue-500 mr-3" />
                      <span>120 Street Lorem Ipsum Sit Amet</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
