import './About.css';
export default function About() {
  return (
    <section className="bg-light-purple py-5 text-center">
    <div className="container">
      <h1 className="mb-4">About me</h1>

      <img
          src="src/assets/image0.jpeg"
          alt="About Me"
          className="img-fluid rounded-circle shadow"
          style={{ maxWidth: '200px' }} // Limit the size of the image
        />


      <p className="lead mx-auto mb-4" style={{ maxWidth: '600px' }}>
      I am a highly motivated and detail-oriented System Engineer with a passion for numbers and a strong background in accounting. 
      My positive attitude and happy outlook fuel my ability to thrive in any situation, bringing enthusiasm and energy to every project I undertake. 
      I’m an outdoor enthusiast who loves running and snowboarding, and I’m always eager to take on challenges that allow me to combine my analytical skills with my love for dynamic teamwork. 
      I'm excited to grow professionally in a role that values creativity, problem-solving, and a collaborative spirit.
      </p>
      
    </div>
    </section>
  );
}
