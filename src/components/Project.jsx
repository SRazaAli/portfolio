import ProjectDetails from "./ProjectDetails"
import { useState } from "react";

const Project = ({ title, description, subDescription, href, image, tags,setPreview }) => {
    const [isHidden, setIsHidden] = useState(false);

    let modal = "";
    {isHidden? modal = <>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            <ProjectDetails
                title={title}
                description={description}
                subDescription={subDescription}
                href={href}
                image={image}
                tags={tags}
                closeModal={() => setIsHidden(false)}
            />
        </> :null}


    return (
        <>
            <div
             className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0"
             onMouseEnter={()=>{setPreview(image)}}
             onMouseLeave={()=>{setPreview(null)}}
             >
                <div>
                    <p className="text-2xl ">{title}</p>
                    <div className="flex gap-5 mt-2 text-sand" >
                        {tags.map((tagItem) => (<span key={tagItem.id}>{tagItem.name}</span>))}
                    </div>
                </div>
                <button onClick={()=>{setIsHidden(true)}} className="flex items-center gap-1 cursor-pointer hover-animation">
                    Read More
                    <img
                        src="assets/arrow-right.svg"
                        alt="arrow-right"
                        className="w-5"
                    />
                </button>
            </div>
            {modal}
        </>
    )
}

export default Project
