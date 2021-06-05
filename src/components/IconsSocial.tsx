import React from "react";

export const IconsSocial = () => {
  return <div className="IconsSocial">
    <a href='https://www.linkedin.com/in/aimi-mcconnell-044a7011a/'
      className='IconsSocial__linkedin'
      target="_blank"
      rel="noopener noreferrer">
      <img alt='LinkedIn logo' src={'/static/linkedin-logo.svg'} />
    </a>
    <a href='https://github.com/aimimcc'
      className='IconsSocial__github'
      target="_blank"
      rel="noopener noreferrer">
      <img alt='Github logo' src={'/static/github-logo.svg'} />
    </a>
  </div>
};