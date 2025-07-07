'use client'

import { useRef, useEffect, useState } from "react"
import "./project.css"
import ProjectSkeleton from "@/components/ProjectSkeleton";


export default function Cards() {
   const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading , setLoading] = useState(true);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.children[0].offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

const getData = async () => {
    const response = await fetch("https://portfolio-backend-1-ot11.onrender.com");
    const data = await response.json();
    setProjects(data[0].projects);
    setLoading(false);

}
  useEffect(()=>{
   getData();
  },[])
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="top-projects-container">
      <h2 className="section-title">
        Top <span className="highlight">Projects</span>
      </h2>

      <div className="card-scroll-container" ref={scrollRef}>
        {loading
          ? Array(4).fill(0).map((_, i) => <ProjectSkeleton key={i} />)
          :projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="upper-title">
              <h3 className="project-title">{project.title}</h3>
              <a href={project.link} className="go-button" target="_blank" rel="noopener noreferrer">
                GO
              </a>
            </div>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {projects.map((_, index) => (
          <span key={index} className={`dot ${index === activeIndex ? "active" : ""}`} />
        ))}
      </div>
    </div>
  )
}
