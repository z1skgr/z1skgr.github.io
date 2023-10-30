import React, {} from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "AI Enthusiast",
          "Fast Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,
      }}
    />
  );
}

export default Type;
