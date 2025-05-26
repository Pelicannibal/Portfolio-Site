import React from "react";

type SkillCardProps = {
    logo: string,
    name: string,
    description: string,
}

export const SkillCard: React.FC<SkillCardProps> = ({ logo, name, description }) => {
    return (
        <div>
            <img src={logo} />
            <div>{name}</div>
            <b>{description}</b>
        </div>
    )
}