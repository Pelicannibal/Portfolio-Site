import React from "react";
import { useState } from "react";

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
        link: import.meta.env.LINKEDIN,
        icon: "path"
    },
    "Github" : {
        link: import.meta.env.GITHUB,
        icon: "path"
    },
    "YouTube" : {
        link: import.meta.env.YOUTUBE,
        icon: "path"
    }
}

const ContactIcon: React.FC<ContactIconProps> = ({ name, social, setHoveredSocial }) => {
    return (
        <div
        onMouseEnter={() => setHoveredSocial(name)}
        onMouseLeave={() => setHoveredSocial(null)}
        >
            <img src={social.icon} alt={`${name} icon`} />
        </div>
    )
}

export const ContactBar = () => {
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

    return (
        <>
            <div>
                {Object.entries(socials).map(([ name, social ]) => 
                    <ContactIcon key={name} name={name} social={social} setHoveredSocial={setHoveredSocial}/>
                )}
            </div>
            <div>
                {hoveredSocial}
            </div>
        </>
        
    )
}