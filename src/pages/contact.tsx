import React from "react";
import { Layout } from "../components/Layout";

function Contact() {
    return (
        <Layout
            pageTitlePrefix='Contact'
            description="I love to talk! Let's create something awesome together!"
            imageUrl={'https://aimimcconnell.co.uk/static/contact.png'}>
            <div className="Contact__socials">
                <ul>
                    <li><a href="https://github.com/aimimcc" target="_blank"
                           rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/aimi-mcconnell-044a7011a/" target="_blank"
                           rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
            <div className={'Contact__paragraph'}>I love to talk!</div>
            <div className={'Contact__paragraph'}>Let's create something awesome together!</div>
            <div className={'Contact__paragraph'}><a href='mailto:aimz.mcc@gmail.com'>aimz.mcc@gmail.com</a></div>
        </Layout>
    )
}

export default Contact;