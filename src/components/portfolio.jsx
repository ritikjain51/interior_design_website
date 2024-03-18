import React, { useState } from "react";

const projects = [
  {
    name: "The Chalet",
    type: "Residential",
    image: "https://via.placeholder.com/300x200?text=The+Chalet",
  },
  {
    name: "Mono Kai",
    type: "Commercial",
    image: "https://via.placeholder.com/300x200?text=Mono+Kai",
  },
  {
    name: "Reif Apartments",
    type: "Semi Residential",
    image: "https://via.placeholder.com/300x200?text=Reif+Apartments",
  },
  {
    name: "Sunrise",
    type: "Residential",
    image: "https://via.placeholder.com/300x200?text=Sunrise",
  },
];

const ProjectsTab = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filterProjects = (type) => {
    setSelectedType(type);
  };

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-md ${
            selectedType === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => filterProjects("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedType === "Commercial" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => filterProjects("Commercial")}
        >
          Commercial
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedType === "Residential" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => filterProjects("Residential")}
        >
          Residential
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            selectedType === "Semi Residential"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => filterProjects("Semi Residential")}
        >
          Semi Residential
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between"
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-600">{project.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;