"use client";
import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Scrollbar } from "smooth-scrollbar-react";
import ContactPageButton from "./ContactButton";
import AnimatedCursor from "react-animated-cursor";
import { Button } from "@/components/ui/button";

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

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ContactFormData>();

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
    "Mobile development",
  ];

  const budgets = [
    "10-20k",
    "30-40k",
    "40-50k",
    "50-100k",
    ">100k",
  ];

  return (
    <Scrollbar
      damping={0.08}
      thumbMinSize={60}
      alwaysShowTracks
      continuousScrolling
      className="w-full max-w-7xl mx-auto my-40 h-[300vh]"
    >
      <div className="">
        <div className=" ">
          <h1 className="text-[100px] inline text-gray-400">
            Hey!{" "}
            <span className="font-bold text-white">
              Tell us all <br />
              the things 👋
            </span>
          </h1>

          <div className="mt-32">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="text-3xl my-5 text-gray-400">I'm interested in...</p>
              <div className="flex flex-wrap gap-4">
                {projects.map((project) => (
                  <ContactPageButton
                    key={project}
                    label={project}
                    selected={selectedProject.includes(project)}
                    onSelect={handleSelectProject}
                  />
                ))}
              </div>
              <div className="py-32 space-y-32">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b-2 bg-transparent text-4xl py-3 px-2 outline-none uppercase focus:border-white transition-all ease-in duration-300"
                  {...register("name", { required: true })}
                />
                {errors.name && <p className="text-red-500">Name is required</p>}
                
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b-2 bg-transparent text-4xl py-3 px-2 outline-none uppercase focus:border-white transition-all ease-in duration-300"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500">Email is required</p>}
                
                <textarea                
                  placeholder="Tell us about your project"
                  className="w-full border-b-2 bg-transparent text-4xl py-3 px-2 outline-none uppercase focus:border-white transition-all ease-in duration-300"
                  {...register("projectDetails")}
                />
              </div>
              <div>
                <p className="text-white text-4xl my-10">Project budget (USD)</p>
                <div className="space-x-4">
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
              <Button type="submit" className="mt-10">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <AnimatedCursor
        color="255, 255, 255, 0.3" // Cursor color in RGB format
        innerSize={8} // Size of the inner cursor
        outerSize={0} // Size of the outer cursor
        outerAlpha={0.3} // Opacity of the outer cursor
        innerScale={10} // Scale of the inner cursor
        outerScale={10} // Scale of the outer cursor
        innerStyle={{}}
        clickables={["button", "a", "h1"]} // Elements that trigger cursor animations
      />
    </Scrollbar>
  );
};

export default ContactPage;
