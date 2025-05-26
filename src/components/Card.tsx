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
            <img />
            <h3></h3>
            <p></p>
            <div>
                {technologies.map((tech:string) => (
                    <span>

                    </span>
                ))}
            </div>
        </div>
    )
}