"use client";
import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Scrollbar } from "smooth-scrollbar-react";
import ContactPageButton from "./ContactButton";
import AnimatedCursor from "react-animated-cursor";
import WordPullUp from "@/components/magicui/word-pull-up";

interface ContactFormData {
  name: string;
  email: string;
  projectDetails?: string;
  projects: string[];
  budget: string | null;
}

const ContactPage = () => {
  const [selectedProject, setSelectedProject] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>();

  const handleSelectProject = (label: string) => {
    setSelectedProject((prevSelectedProject) =>
      prevSelectedProject.includes(label)
        ? prevSelectedProject.filter((project) => project !== label)
        : [...prevSelectedProject, label]
    );
  };

  const handleSelectBudget = (budget: string) => {
    setSelectedBudget(budget);
  };

  useEffect(() => {
    setValue("projects", selectedProject);
  }, [selectedProject, setValue]);

  useEffect(() => {
    setValue("budget", selectedBudget);
  }, [selectedBudget, setValue]);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const formData = {
      ...data,
      projects: selectedProject,
      budget: selectedBudget,
    };


    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        // Optionally, add a success message or redirect the user
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const projects = [
    "Site from Scratch",
    "UX/UI design",
    "Production design",
    "No-code site",
    "Motion design",
    "Branding",
    "Mobile Develop",
  ];

  const budgets = ["10-20k", "30-40k", "40-50k", "50-100k", ">100k"];

  return (
    <Scrollbar
      damping={0.08}
      thumbMinSize={60}
      alwaysShowTracks
      continuousScrolling
      className="w-full max-w-7xl mx-auto my-40 "
    >
      <div className="">
        <div className=" ">
          
          <WordPullUp
            className="text-5xl font-bold tracking-[-0.02em] leading-snug text-black dark:text-white md:text-7xl md:leading-[5rem]"
            words="Hey! Tell Us All The Things 👋 "
          />

          <div className="mt-32">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="text-3xl my-5 text-center md:text-left text-gray-400">
                I &apos;m interested in...
              </p>
              <div className="flex flex-wrap gap-4 ml-2 md:ml-0">
                {projects.map((project) => (
                  <ContactPageButton
                    key={project}
                    label={project}
                    selected={selectedProject.includes(project)}
                    onSelect={handleSelectProject}
                  />
                ))}
              </div>
              <div className="py-32 space-y-28 p-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b-2 bg-transparent text-4xl py-3 px-2 outline-none uppercase focus:border-white transition-all ease-in duration-300"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500">Name is required</p>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b-2 bg-transparent text-4xl py-3 px-2 outline-none uppercase focus:border-white transition-all ease-in duration-300"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}

                <textarea
                  placeholder="Tell us about your project"
                  className="w-full border-b-2 bg-transparent text-4xl py-3 px-2 outline-none uppercase focus:border-white transition-all ease-in duration-300"
                  {...register("projectDetails")}
                />
              </div>
              <div>
                <p className="text-white text-center md:text-left text-4xl my-10">
                  Project budget (USD)
                </p>
                <div className=" md:space-x-4 space-y-4 m-2 md:m-0 flex flex-col md:block ">
                  {budgets.map((budget) => (
                    <ContactPageButton
                      key={budget}
                      label={budget}
                      selected={selectedBudget === budget}
                      onSelect={() => handleSelectBudget(budget)}
                    />
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="mt-20 border text-3xl py-20 px-24 m-2 rounded-full"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <AnimatedCursor
        color="255, 255, 255, 0.3" // Cursor color in RGB format
        innerSize={8} // Size of the inner cursor
        outerSize={0} // Size of the outer cursor
        outerAlpha={0.3} // Opacity of the outer cursor
        innerScale={10} // Scale of the inner cursor
        outerScale={10} // Scale of the outer cursor
        innerStyle={{}}
        clickables={["button", "a", "h1"]} // Elements that trigger cursor animations
      /> */}
    </Scrollbar>
  );
};

export default ContactPage;
