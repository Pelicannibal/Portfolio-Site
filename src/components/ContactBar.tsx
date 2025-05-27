import React from "react";
import { useState } from "react";
import GithubLogo from "/src/assets/Github.png";
import YoutubeLogo from "/src/assets/Youtube.png";
import LinkedinLogo from "/src/assets/Linkedin.png";


type SocialItem = {
    link: string;
    icon: string;
}
type Social = { [social: string]: SocialItem }

type ContactIconProps = {
    name: string,
    social: SocialItem,
    setHoveredSocial: (name: string | null) => void;
}

let socials: Social = {
    "LinkedIn" : {
        link: import.meta.env.VITE_LINKEDIN,
        icon: LinkedinLogo
    },
    "Github" : {
        link: import.meta.env.VITE_GITHUB,
        icon: GithubLogo
    },
    "YouTube" : {
        link: import.meta.env.VITE_YOUTUBE,
        icon: YoutubeLogo
    }
}

const ContactIcon: React.FC<ContactIconProps> = ({ name, social, setHoveredSocial }) => {
    return (
        <div
        className="mx-10 my-3"
        onMouseEnter={() => setHoveredSocial(name)}
        onMouseLeave={() => setHoveredSocial(null)}
        onClick={() => window.open(social.link)}
        >
            <img src={social.icon} alt={`${name} icon`} />
        </div>
    )
}

export const ContactBar = () => {
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

    return (
        <div className="absolute pt-10 left-1/2 -translate-x-1/2 top-0">
            <div className="flex justify-between items-center bg-schemeA dark:bg-schemeB px-6 rounded-full shadow-md sticky top-0 z-50">
                {Object.entries(socials).map(([ name, social ]) => 
                    <ContactIcon key={name} name={name} social={social} setHoveredSocial={setHoveredSocial}/>
                )}
            </div>
            <div>
                {hoveredSocial}
            </div>
        </div>
        
    )
}