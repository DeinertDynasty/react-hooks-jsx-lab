import React from "react";

// Assuming you have imported an image
const image = "path/to/your/image.jpg";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a paragraph about me.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
