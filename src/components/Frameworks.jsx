import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    const skills = [
        "kotlin",   
        "mongodb",     
        "cplusplus",
        "css3",
        "dotnet",
        "python",
        "csharp",
        "git",
        "html5",
        "javascript",
        "microsoft",
        "react",
        "nodejs", 
        "tailwindcss",
        "vitejs",
        "wordpress"
    ]

    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => {
                    return <Icon key={index} src={`assets/logos/${skill}.svg`} />;
                })}

            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.reverse().map((skills, index) => {
                    return <Icon key={index} src={`assets/logos/${skills}.svg`} />
                })}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => {
    return <img
        src={src}
        className="duration-200 rounded-sm hover:scale-110"
    />
}

