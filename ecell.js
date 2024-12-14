import React from "react";
import "./App.css"; // Link to your CSS file

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Initiatives</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </div>
      </nav>

      {/* Section */}
      <section className="section">
        <h2>INITIATIVES</h2>
        <p>
          A brief understanding about ecell, what we do at ecell. About how we
          have a wide range of alumni network and also help incubate startups.
          Also giving a brief history about ecell when it was formed and what
          all startups have already been incubated as of now.
        </p>
      </section>

      {/* Placeholder for Image and MES */}
      <div className="mes-container">
        <div className="image-placeholder"></div>
        <h3>E-10 Summit</h3>
        <p>The inaugural E10 Entrepreneurship Summit, held on January 16, 2024, united the entrepreneurial communities of MAHE colleges to promote collaboration and innovation. Organized by E-Cell, MIT Manipal, the event aimed to address challenges in fostering entrepreneurship, such as securing sponsorships, cultivating student interest, and enhancing networking opportunities. A key outcome was the signing of a charter committing all participants to a shared vision of supporting entrepreneurship across MAHE. Through insightful discussions, success stories, and collaborative initiatives, the summit laid the foundation for a stronger, interconnected entrepreneurial ecosystem in Manipal.</p>
        <h3>Start-up scoop</h3>
        <p>Startup Scoop is a bi-monthly newsletter where the latest news and updates from the dynamic world of business and entrepreneurship are delivered. Trending topics, groundbreaking innovations, and inspiring success stories are highlighted to keep readers informed. Startups from MAHE are given a spotlight in each edition, with their journeys and achievements showcased</p>
        <h3>Business Clinic</h3>
        <p>Business Clinic is a structured approach to helping startups refine ideas, validate feasibility, and identify target markets. It emphasizes solving key problems, understanding customer needs, and analyzing competition. Startups test core functionality, gather user feedback, and launch simplified products, with progress guided by key performance metrics to ensure market readiness.</p>
      </div>
        
      </div>
    </div>
  );
}

export default App;
