export const OpenCard = ({ image, title, description, technologies, links }: any) => (
  <div className="fixed inset-0 bg-openCard text-white p-8 rounded-lg z-[1000] m-auto max-w-3xl shadow-xl">
    <img src={image} alt={title} className="rounded-lg w-full h-60 object-cover mb-4" />
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="mb-4 text-sm">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech: string) => (
        <span key={tech} className="bg-tooltip text-black rounded-full px-2 py-1 text-xs">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      {links.map((link: any) => (
        <a key={link.name} href={link.url} target="_blank" className="text-sm underline">
          {link.name}
        </a>
      ))}
    </div>
  </div>
);