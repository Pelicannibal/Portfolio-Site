import React from "react";

type SocialItem = {
    link: string;
    icon: string;
}
let socials: {[name: string]: SocialItem} = {
    "LinkedIn" : {
        link: import.meta.env.LINKEDIN,
        icon: "path"
    },
    "Github" : {
        link: import.meta.env.GITHUB,
        icon: "path"
    },
}

type ContactProps = {
    email: string,
    socials: {[name: string]: SocialItem}[],
};

export const ContactBar: React.FC<ContactProps> = ({ email, socials }) => {
    return (
        <div>

        </div>
    )
}