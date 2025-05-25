export const ContactBar = ({ email, socials }: any) => (
  <div className="flex justify-between items-center bg-lightBox dark:bg-openCard px-6 py-3 rounded-lg shadow-md sticky top-0 z-50">
    <div className="flex items-center gap-4">
      <div className="relative group cursor-pointer px-4 py-2 rounded-full hover:bg-tooltip">
        Contact
        <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 bg-tooltip text-xs px-2 py-1 rounded-md hidden group-hover:block">
          {email}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4">
      {socials.map((social: any) => (
        <div key={social.name} className="relative group cursor-pointer px-4 py-2 rounded-full hover:bg-tooltip"
          onClick={() => window.open(social.url, '_blank')}
        >
          {social.icon}
          <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 bg-tooltip text-xs px-2 py-1 rounded-md hidden group-hover:block">
            {social.name}
          </div>
        </div>
      ))}
    </div>
  </div>
);