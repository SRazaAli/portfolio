import { useState } from "react"
import myProjects from "../Constants/index"
import Project from "../components/Project"
import { motion, useMotionValue, useSpring } from "motion/react"

const Projects = () => {
    const [preview,setPreview] = useState(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });

    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }

    return (
        <section
            className="relative c-space section-spacing"
            onMouseMove={handleMouseMove}
        >
            <h2 className="text-heading">My Selected Projects</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
            {myProjects.map((projectItem) => (
                <Project
                    key={projectItem.id}
                    title={projectItem.title}
                    description={projectItem.description}
                    subDescription={projectItem.subDescription}
                    href={projectItem.href}
                    image={projectItem.image}
                    tags={projectItem.tags}
                    setPreview = {setPreview}

                    />
            ))}
            {preview && <motion.img
                className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                src={preview}
                style={{ x: springX, y: springY }}
            />}

        </section>
    )
}

export default Projects
