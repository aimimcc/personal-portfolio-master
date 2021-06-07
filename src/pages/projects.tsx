import React from "react";
import Link from 'next/link';
import { Layout } from "../components/Layout";
import { AppContext } from "../context/AppContext";

const Projects = () => {
  const context = React.useContext(AppContext);

  return (
    <Layout
      pageTitlePrefix={`Projects`}
      description={'Side projects that I sometimes work on when I have any spare time'}
      imageUrl={'https://aimimcconnell.co.uk/static/projects_page.png'}>
      <div className="Projects">
        <div>
          <div className="Projects__paragraph">
            <h2>
              <a href="http://www.johnforgan.co.uk/" target="_blank"
                rel="noopener noreferrer">John Forgan Art</a>
            </h2>
            <div className="Projects__date">August 2019</div>
          </div>
          <div className="Projects__desc Projects__paragraph">John Forgan Art is a website I created to showcase the artists work.
          </div>
        </div>
        <div>
          <div className="Projects__paragraph">
            <h2><Link href="/"><a onClick={() => context?.setLinkHovered?.(false)}>Personal Portfolio</a></Link></h2>
            <div className="Projects__date">May 2021 – Present</div>
          </div>
          <div className="Projects__desc Projects__paragraph">The idea was to create an interactive personal website that can showcase my work and experience and also allow me to use technologies that I am learning about.
          </div>
          <div className="Projects__paragraph"><a href="https://github.com/aimimcc/personal-portfolio-master" target="_blank"
            rel="noopener noreferrer">Source code</a></div>
        </div>
      </div>
    </Layout>
  )
};

export default Projects;