import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  
 const list= technologies.map((technology)=>{ 
    return <span key={technology.id }>{technology}</span>
    
})

  console.log(technologies)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        
      {list}
      </div>
    </div>
  );
}

export default ProjectItem;
