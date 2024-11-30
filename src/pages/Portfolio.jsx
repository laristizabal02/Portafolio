import './Portfolio.css'; 
import React from 'react';
import Project from '../components/Project.jsx';
export default function Portfolio() {

  const projects = [
    {
      title: "Employee Tracker",
      image: "https://www.softactivity.com/wp-content/uploads/Employee-Time-Tracking-1400.jpg", 
      githubLink: "https://github.com/laristizabal02/employeeTracker",
    },
    {
      title: "Forecast",
      image: "https://tempest.earth/wp-content/uploads/2024/03/Online-Weather-Forecast.jpg",
      githubLink: "https://github.com/laristizabal02/forecast",
    },
    {
      title: "Portfolio",
      image: "https://www.swic.edu/wp-content/uploads/2021/05/portfolio-2048x1224.png",
      githubLink: "https://github.com/laristizabal02/Portafolio",
    },
    {
      title: "Vehicle Builder",
      image: "https://www.intelligentliving.co/wp-content/uploads/2024/05/Upgrade-Your-Ride-Top-Quality-Truck-and-Car-Parts-Tips.jpg",
      githubLink: "https://github.com/laristizabal02/vehicleBuilder",
    },
    {
      title: "GenReadme",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxE-OBUxMaDRG1jAz3Wosik6QuxS1Ze_Yhi-fLqx3dvTYiGEjQUs8x8QjuKebVZd2Logk&usqp=CAU",
      githubLink: "https://github.com/laristizabal02/GenReadme",
    },
    {
      title: "Traveler",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8JmCN-3W-MKnMkiW2qoO_YNfqGmXm3EUxQ&s",
      githubLink: "https://github.com/philmore83/Traveler",
    },
  ];

  return (
    <div className="portfolio bg-light-purple py-5">
      <div className="container text-center">
        <h1 className="mb-5">Portfolio</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  {/* Project Title */}
                  <h5 className="card-title">{project.title}</h5>
                  {/* Links */}
                  <a
                    href={project.githubLink}
                    className="btn btn-primary btn-sm me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   GitHub Repo
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
