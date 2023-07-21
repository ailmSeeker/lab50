import React from "react";

function ProjectItem({ name, about, technologies }) {
  let counter = 1110;

  const tech = technologies.map(x => {
    counter = counter + 1;
    return <span key={counter}>{x}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {
          tech
        }
      </div>
    </div>
  );
}

export default ProjectItem;
