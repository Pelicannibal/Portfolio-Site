import React from "react";

type CardProps = {
    image: string,
    title: string,
    description: string,
    technologies: string[],
};

export const Card: React.FC<CardProps> = ({image, title, description, technologies}) => {
    return (
        <div className="card bg-schemeB">
            <div className="mb-1">
                <h3 className="absolute top-10 left-10 text-xl font-bold">{title}</h3>  
                <img src={image} className="absolute top-0 -right-0 w-1/2 h-36 object-cover"/>
            </div>
            <p className="absolute text-sm p-4 left-0">{description}</p>
            <div className="absolute flex gap-2 m-3 bottom-0 left-0">
                {technologies.map((tech:string) => (
                    <span
                        key={tech}
                        className="bg-highlightCol text-white text-xs px-2 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}

export const OpenCard: React.FC<CardProps> = ({image, title, description, technologies}) => {
    return (
        <div>
            <img src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                {technologies.map((tech:string) => (
                    <span>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}