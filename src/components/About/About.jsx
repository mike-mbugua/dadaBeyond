import React from "react";
import "./about.css";
import Question from "./../../assets/images/Question.png";
function About() {
  return (
    <div className="about__container">
      <div className="about__header">
        <h1>Who Are We </h1>
        <img src={Question} alt="" />
      </div>
      <div className="about__paragrapgh">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          ad temporibus delectus saepe iusto accusamus culpa, quae voluptates
          perspiciatis, esse dolor debitis neque blanditiis iure at aut sequi
          quam quos qui fugit? Iure quod illum in. A natus voluptate
          voluptatibus consequatur corporis alias! Asperiores porro labore
          molestias autem blanditiis quisquam eius corporis laudantium enim
          eaque! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Accusantium, ad temporibus delectus saepe iusto accusamus culpa, quae
          voluptates perspiciatis, esse dolor debitis neque blanditiis iure at
          aut sequi quam quos qui fugit? Iure quod illum in. A natus voluptate
          voluptatibus consequatur corporis alias! Asperiores porro labore
          molestias autem blanditiis quisquam eius corporis laudantium enim
          eaque! aut sequi quam quos qui fugit? Iure quod illum in. A natus
          voluptate voluptatibus consequatur corporis alias! Asperiores porro
          labore molestias autem blanditiis quisquam eius corporis laudantium
          enim eaque!
        </p>
      </div>
    </div>
  );
}

export default About;
