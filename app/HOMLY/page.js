"use client";

import ProjectPages from "@/Components/Sections/ProjectPages/ProjectPages";
const Project = () => {
  const project = {
    id: 1,
    name: "HOMLY",
    type: "web",
    imageUrl: "/Images/web2.png",
    projectdes:
      "A strong project description provides a roadmap for stakeholders and communicates the vision without getting bogged down in details. We’ve compiled expert tips and sample project descriptions to help you get started.",
  };

  return (
    <ProjectPages
      name={project.name}
      imageUrl={project.imageUrl}
      type={project.type}
    />
  );
};

export default Project;
