export const Card = ({ image, title, description, technologies }: any) => (
  <div className="bg-lightBox dark:bg-openCard rounded-lg p-4 hover:scale-105 transition-transform shadow-md">
    <img src={image} alt={title} className="rounded-lg w-full h-40 object-cover mb-2" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm mb-2">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech: string) => (
        <span key={tech} className="bg-tooltip rounded-full px-2 py-1 text-xs">
          {tech}
        </span>
      ))}
    </div>
  </div>
);