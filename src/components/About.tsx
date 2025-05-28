import { SkillCard } from "./SkillCard";
import Profile from "/src/assets/ProfilePhoto.png";

import Alert from "/src/assets/icons/Alert.png";

const Avatar = () => {
    return (
        <>
            <img src={Profile} className="rounded-full h-44" />
            <div className="bg-schemeB rounded-default w-44 my-4">
                <b className="text-schemeA">Dominick Skupien</b>
                <p className="text-schemeA">Full Stack Developer</p>
            </div>
        </>
    )
}

const Skills = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-160 max-w-full">
      <SkillCard logo={Alert} name="C#" description="Cooler C++" />
      <SkillCard logo={Alert} name="Unity" description="A Game Engine" />
      <SkillCard logo={Alert} name="TypeScript" description="A Better JavaScript" />
      <SkillCard logo={Alert} name="React" description="Web Dev Framework" />
      <SkillCard logo={Alert} name="Tailwind" description="Lazy CSS Library" />
      <SkillCard logo={Alert} name="AWS" description="Cloud Computing by Bezos" />
    </div>
  );
};

export const About = ({ defClass } : {defClass: string}) => {
    
    return (
        <div className={defClass}>
            <Avatar />

            <p className="w-72 text-left">
                I am a Full Stack Developer who likes to make indie games in my free time.
            </p>
            <p className="w-72 text-left my-4">
                📍 Poland
            </p>

            <Skills />
        </div>
    )
}