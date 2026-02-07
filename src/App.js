import { useState } from "react";
import Header from "./components/Header";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <AddProjectForm onAddProject={handleAddProject} />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
