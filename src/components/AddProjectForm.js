import { useState } from "react";

function AddProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
    };

    onAddProject(newProject);

    setTitle("");
    setDescription("");
  }

  return (
    <form className="add-project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProjectForm;
