import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../onboarding/styles/onboarding.css";
import { onboardingData } from "../model/onboardingModel";

interface Project {
  title: string;
  description: string;
  technologies: string;
}

const AddProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  // Load from localStorage or fallback to onboardingData
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem("projects");
    return stored ? JSON.parse(stored) : onboardingData.projects || [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [error, setError] = useState("");

  // Update onboarding model and local storage
  useEffect(() => {
    onboardingData.projects = projects.map((project) => project.title);
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Add project
  const addProject = () => {
    if (!title.trim()) {
      setError("Please enter a project title.");
      return;
    }

    const newProject: Project = {
      title: title.trim(),
      description: description.trim(),
      technologies: technologies.trim(),
    };

    const updated = [...projects, newProject];
    setProjects(updated);

    // Reset fields and clear error
    setTitle("");
    setDescription("");
    setTechnologies("");
    setError("");
  };

  // Remove project
  const removeProject = (index: number) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  // Handle Finish
  const handleFinish = () => {
    if (projects.length === 0) {
      setError("Please add at least one project before continuing.");
      return;
    }

    // Save to onboarding data and localStorage
    onboardingData.projects = projects.map((p) => p.title);
    localStorage.setItem("onboardingData", JSON.stringify(onboardingData));

    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <motion.div
      className="onboarding-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="logo">SKILLSYNC</h1>

      <div className="onboarding-card">
        {/* Step indicators */}
        <div className="step-indicators">
          <div className="dot" onClick={() => navigate("/onboarding/skills")}></div>
          <div className="dot" onClick={() => navigate("/onboarding/interests")}></div>
          <div className="dot active" onClick={() => navigate("/onboarding/projects")}></div>
        </div>

        <h2>Past Projects</h2>
        <p>Tell us about the projects you’ve worked on or contributed to.</p>

        {/* Input form */}
        <div className="input-group vertical">
          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Short Description (what you built, your role, etc.)"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Technologies Used (comma-separated)"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
          <button onClick={addProject}>Add Project</button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {/* Display added projects */}
        <div className="projects-list">
          {projects.length > 0 ? (
            projects.map((proj, i) => (
              <div key={i} className="project-card">
                <div className="project-header">
                  <h3>{proj.title}</h3>
                  <span className="remove-btn" onClick={() => removeProject(i)}>
                    ✕
                  </span>
                </div>
                {proj.description && <p className="desc">{proj.description}</p>}
                {proj.technologies && (
                  <p className="tech">
                    <strong>Technologies:</strong> {proj.technologies}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="no-projects">No projects added yet.</p>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="buttons">
          <button className="back-btn" onClick={() => navigate("/onboarding/interests")}>
            Back
          </button>
          <button className="next-btn" onClick={handleFinish}>
            Finish
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddProjectsPage;
