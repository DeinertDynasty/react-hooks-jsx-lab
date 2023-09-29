import React from "react";

// Assuming you have imported name and city variables
const name = "Your Name";
const city = "Your City";

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {`${name} is a Web Developer from ${city}`}
      </h1>
    </div>
  );
}

export default Home;
