"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import { title } from 'process'
import ProjectTag from './ProjectTag';

const projectData = [
  {
      id: 1,
      title: "React Portfolio Website",
      description: "A modern, responsive portfolio built with React to showcase skills, projects, and contact information.",
      Image: "/1.jpg", 
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Kulsoomkhan487",
      previewUrl: "/"
  },
  {
      id: 2,
      title: "Photography portfolio Website",
      description: "A visually stunning portfolio website for photographers, featuring a photo gallery and smooth navigation.",
      Image: "/2.jpg", 
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Kulsoomkhan487",
      previewUrl: "/"
  },
  {
      id: 3,
      title: "E-Commerce Application",
      description: "A fully functional e-commerce app built with React, offering product listings, shopping cart, and secure checkout.",
      Image: "/3.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Kulsoomkhan487",
      previewUrl: "/"
  },
  {
      id: 4,
      title: "React Firebase Template",
      description: "A React template integrated with Firebase for real-time data management and user authentication.",
      Image: "/4.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Kulsoomkhan487",
      previewUrl: "/"
  },
  {
      id: 5,
      title: "React Portfolio Website",
      description: "A second iteration of your portfolio with added features like a blog and dynamic project updates.",
      Image: "/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Kulsoomkhan487",
      previewUrl: "/"
  },
  {
      id: 6,
      title: "Male Fashions Website",
      description: "A versatile portfolio website showcasing skills, projects, and contact details with a sleek and user-friendly design.",
      Image: "/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Kulsoomkhan487",
      previewUrl: "/"
  }
];


const ProjectSection = () => {
  const [tag, setTag] = useState<string>("All");

  const HandleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  const filteredProject = projectData.filter((project) => 
    project.tag.includes(tag)  
  );
  
  


  return (
    <>
    <div>
  <h2 className='font-bold text-white text-3xl flex items-center justify-center'>My Projects</h2>
  <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
    <ProjectTag 
      onClick={HandleTagChange} 
      name="All" 
      isSelected={tag === "All"} 
    /> 

      <ProjectTag 
      onClick={HandleTagChange} 
      name="Web" 
      isSelected={tag === "Web"} 
    />  

<ProjectTag 
      onClick={HandleTagChange} 
      name="Mobile" 
      isSelected={tag === "Mobile"} 
    /> 
  </div>
</div>

        <div>
  {filteredProject.map((project) => (
    <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.Image} 
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
    />
  ))}
       </div>
</>
  )
}

export default ProjectSection