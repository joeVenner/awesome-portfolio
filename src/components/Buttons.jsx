import React, { Component } from 'react';
import { GitHub, LinkedIn, Resume, Email, Youtube } from './../icons'

const DATA = [
    {
        href: "https://github.com/joevenner/",
        aria: "Visit my GitHub profile",
        icon: <GitHub />,
        label: "My Github",
    },

    {
        href: "https://www.linkedin.com/in/mosaab-yassir-lafrimi/",
        aria: "Visit my LinkedIn profile",
        icon: <LinkedIn />,
        label: "My LinkedIn",
    },
    {
        href: "https://drive.google.com/",
        aria: "Visit Google Drive to view and download my resume",
        icon: <Resume />,
        label: "My Resume",
    },
    {
        href: "mailto:ylafrimi@gmail.com",
        aria: "Send me an email with this template",
        icon: <Email />,
        label: "My eMail",
    }
];

const Button = ({ href, aria, icon, label }) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_blank' aria-label={aria} rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            </div>
        );
    }
}

export default Buttons;
