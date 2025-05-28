import Profile from "/src/assets/ProfilePhoto.png";

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

export const About = () => {
    
    return (
        <div>
            <Avatar />

            <p className="w-72 text-left">
                I am a Full Stack Developer who likes to make indie games in my free time.
            </p>
            <p className="w-72 text-left my-4">
                📍 Poland
            </p>
        </div>
    )
}