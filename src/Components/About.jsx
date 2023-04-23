/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import image from "../images/mosaic.svg";

const imageAltText = "purple and blue abstract background";
const description =
  "I'm a Web developer and a Competitive Code studying at VIT, Vellore. I enjoy teaching, learning and creating new piece of software.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web developer",
  "Blockchain",
  "Competitive Coder",
  "Data Structure and Algorithm"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
