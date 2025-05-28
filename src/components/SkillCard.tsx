import React from "react";

type SkillCardProps = {
    logo: string,
    name: string,
    description: string,
}

export const SkillCard: React.FC<SkillCardProps> = ({ logo, name, description }) => {
    return (
        <div className="bg-highlightCol rounded-full h-10 w-40">
            <div className="flex">
                <img src={logo} className="h-6 pr-2"/>
                <b className="text-sm">{name}</b>
            </div>
            <p className="text-xs">{description}</p>
        </div>
    )
}