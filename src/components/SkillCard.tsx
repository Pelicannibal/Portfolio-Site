import React from "react";

type SkillCardProps = {
    logo: string,
    name: string,
    description: string,
}

export const SkillCard: React.FC<SkillCardProps> = ({ logo, name, description }) => {
    return (
        <div className="bg-highlightCol rounded-full h-16">
            <div className="flex">
                <img src={logo} />
                <b>{name}</b>
            </div>
            <p>{description}</p>
        </div>
    )
}