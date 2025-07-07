import React from 'react';
import './projectSkeleton.css';

const ProjectSkeleton = () => {
  return (
    <div className="project-skeleton-card">
      <div className="skeleton-header">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-button shimmer"></div>
      </div>
      <div className="skeleton-desc shimmer"></div>
      
    </div>
  );
};

export default ProjectSkeleton;
