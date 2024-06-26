"use client";
import React from "react";
import ProjectPages from "@/Components/Sections/ProjectPages/ProjectPages";

const Project = () => {
  const project = {
    id: 15,
    name: "devignedge",
    type: "uiux",
    imageUrl: "/Images/uiux1.png",
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
