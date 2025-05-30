import React from "react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import GithubLogo from "/src/assets/icons/socials/Github.png";
import YoutubeLogo from "/src/assets/icons/socials/Youtube.png";
import LinkedinLogo from "/src/assets/icons/socials/Linkedin.png";

type SocialItem = {
    link: string;
    icon: string;
}
type Social = { [social: string]: SocialItem }

type ContactIconProps = {
    name: string,
    social: SocialItem,
    setHoveredSocial: (name: string | null) => void;
    setPosition: (pos: { x: number; y: number }) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

let socials: Social = {
    "LinkedIn" : {
        link: import.meta.env.VITE_LINKEDIN,
        icon: LinkedinLogo
    },
    "Github" : {
        link: import.meta.env.VITE_GITHUB,
        icon: GithubLogo
    },
    "YouTube" : {
        link: import.meta.env.VITE_YOUTUBE,
        icon: YoutubeLogo
    }
}

const ContactIcon: React.FC<ContactIconProps> = ({ name, social, setHoveredSocial, setPosition, handleMouseLeave, handleMouseEnter }) => {
    return (
        <div
        className="mx-10 my-3"
        onMouseEnter={(e) => {
          const relativeTo = e.currentTarget.offsetParent as HTMLElement;
          const iconRect = e.currentTarget.getBoundingClientRect();
          const containerRect = relativeTo.getBoundingClientRect();

          const x = iconRect.left - containerRect.left + iconRect.width / 2;
          const y = iconRect.bottom - containerRect.top;
        
          handleMouseEnter();
          setHoveredSocial(name);
          setPosition({ x, y });
        }}
        onMouseLeave={handleMouseLeave}
        onClick={() => window.open(social.link)}
        >
            <img src={social.icon} alt={`${name} icon`} />
        </div>
    )
}

export const ContactBar = () => {
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
        hideTimeout.current = null;
      }
    };

    const handleMouseLeave = () => {
      hideTimeout.current = setTimeout(() => {
        setHoveredSocial(null);
      }, 500); // 300ms delay before disappearing
    };

    return (
        <div className="navigation-container">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setHoveredSocial(null)}
                className="relative pt-10 pointer-events-auto">
                <div className="navigation">
                    {Object.entries(socials).map(([ name, social ]) => 
                        <ContactIcon
                            key={name}
                            name={name}
                            social={social}
                            setHoveredSocial={setHoveredSocial}
                            setPosition={setPosition}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                        />
                    )}
                </div>
            
                {hoveredSocial && (
                    <AnimatePresence>
                        <motion.div
                            key="social-tooltip"
                            className="absolute bg-schemeB text-schemeA px-3 py-1 rounded-default text-sm"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, x: position.x - 40, y: position.y - 50 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {hoveredSocial}
                        </motion.div>
                    </AnimatePresence>
                )} 
            </div>
        </div>
        
    )
}