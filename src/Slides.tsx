import { Card } from "./components/Card"

export const Projects = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-4">
            <Card image="/src/assets/icons/Alert.png" title="TEST" technologies={ ["C#", "Unity"] } description="this is a test card"/>
            <Card image="/src/assets/icons/Alert.png" title="TEST" technologies={ ["tailwind", ] } description="this is a test card"/>
            <Card image="/src/assets/icons/Alert.png" title="TEST" technologies={ ["AWS", ] } description="this is a test card"/>
        </div>
    )
}

export const WorkExperience = () => {
    return (
        <>
        </>
    )
}

export const AboutMe = () => {
    return (
        <>
        </>
    )
}