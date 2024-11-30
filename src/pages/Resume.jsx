import './Resume.css';
import React from 'react';

export default function Resume() {
  const downloadResume = () => {
    // Path to your PDF file in the public folder
    const link = document.createElement('a');
    link.href = '/assets/pdf/LauraAristizabalResume.pdf'; // Replace with your actual PDF file path
    link.download = '/LauraAristizabalResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume bg-light-purple py-5 text-center">
      <div className="container">
        <h1 className="mb-4">Resume</h1>
        <p>Click the button below to download my resume in PDF format:</p>
        <button className="btn btn-primary btn-lg" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
    </div>
  );
}