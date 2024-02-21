import React from 'react';

// Placeholder image URL
const placeholderImage = "https://via.placeholder.com/215";

const About = ({ aboutText, imageSrc = placeholderImage }) => {
  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;