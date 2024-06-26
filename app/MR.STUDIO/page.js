"use client";
import React, { useEffect } from "react";
import ProjectPages from "@/Components/Sections/ProjectPages/ProjectPages";

const Project = () => {
  const project = {
    id: 3,
    name: "MR.studio",
    type: "web",
    imageUrl: "/Images/web3.png",
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
