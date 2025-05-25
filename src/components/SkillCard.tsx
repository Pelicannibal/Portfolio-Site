export const SkillCard = ({ logo, name, description }: any) => (
  <div className="bg-lightBox dark:bg-openCard rounded-lg p-4 flex flex-col items-center text-center shadow-md">
    <img src={logo} alt={name} className="w-10 h-10 mb-2" />
    <div className="font-semibold text-sm">{name}</div>
    <div className="text-xs mt-1">{description}</div>
  </div>
);