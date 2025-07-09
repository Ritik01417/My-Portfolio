import React from 'react';
import './projectSkeleton.css';

export default function ProjectSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-header">
        <div className="skeleton-title shimmer" />
        <div className="skeleton-button shimmer" />
      </div>
      <div className="skeleton-description shimmer" />
    </div>
  );
}

