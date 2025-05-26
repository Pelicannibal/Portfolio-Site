import React from "react";

type CardProps = {
    image: string,
    title: string,
    description: string,
    technologies: string[],
};

export const Card: React.FC<CardProps> = ({image, title, description, technologies}) => {
    return (
        <div>
            <img src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                {technologies.map((tech:string) => (
                    <span>

                    </span>
                ))}
            </div>
        </div>
    )
}