import React from "react";

type SkillCardProps = {
    logo: string,
    name: string,
    description: string,
}

export const SkillCard: React.FC<SkillCardProps> = ({ logo, name, description }) => {
    return (
        <div className="bg-highlightCol rounded-full w-40">
            <div className="flex items-center">
                <img src={logo} className="h-8 w-8 object-contain mr-1"/>
                <div className="flex flex-col">
                    <b className="text-schemeA text-sm text-left">{name}</b>
                    <p className="text-Gunmetal text-xs text-left">{description}</p>
                </div>
            </div>
        </div>
    )
}