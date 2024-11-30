import React from 'react';

const Project = ({ title, image, githubLink }) => {
  return (
    <div className="card shadow-sm">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        {/* Project Title */}
        <h5 className="card-title">{title}</h5>
        {/* Links */}
        <a
          href={githubLink}
          className="btn btn-primary btn-sm me-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        
      </div>
    </div>
  );
};

export default Project;