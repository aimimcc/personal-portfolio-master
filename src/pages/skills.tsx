import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { AppContext } from "../context/AppContext";

const Skills = () => {
    const context = useContext(AppContext);

    const stringToListElements = (s: string) => {
        return (
            <ul>{s.split('').map((char: string, index: number) =>
                <li key={`${char}-${index}`}>{char !== ' ' ? char : '\u00A0'}</li>)}
            </ul>
        )
    };

    return (
        <Layout
            pageTitlePrefix={'Skills & Experience'}
            description={'Front End Design enthusiast who dabbles with React and Angular. Open to new technologies and development opportunities'}
            imageUrl={'https://aimimcconnell.co.uk/static/skills_page.png'}
            fullscreen>
            <div className={'Skills__text'}><p className={'Skills__paragraph'}>Front End Design enthusiast.
                Open to new technologies and development opportunities.</p>
                <p className={'Skills__paragraph'}>Passionate about data visualization, I enjoy turning complex problems into simple, beautiful and intuitive interface designs.</p>
                <p className={'Skills__paragraph'}>Visit my <a
                    href='https://www.linkedin.com/in/aimi-mcconnell-044a7011a/'
                    target="_blank"
                    rel="noopener noreferrer">LinkedIn</a> profile for more information or just <Link
                    href={'/contact'}>
                    <a onClick={() => context?.setLinkHovered?.(false)}>contact</a></Link> me.</p></div>
            <div className={'Skills__cube-wrapper'}>
                <div className={'Skills__cube cube cube--skills is-spinning'}>
                    <div className={'cube__face cube__face--front'}>CSS</div>
                    <div className={'cube__face cube__face--right'}>JavaScript</div>
                    <div className={'cube__face cube__face--back'}>GIT</div>
                    <div className={'cube__face cube__face--left'}>SCRUM</div>
                    <div className={'cube__face cube__face--top'}>Adobe</div>
                    <div className={'cube__face cube__face--bottom'}>Python</div>
                </div>
            </div>
        </Layout>
    )
};

export default Skills;