import {motion} from "motion/react"
const ProjectDetails = ({ title, description, subDescription, href, image, tags,closeModal }) => {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
            <motion.div 
             className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
             initial = {{opacity:0, scale: 0.5}}
             animate = {{opacity:1 , scale: 1}}
             >
                <button onClick={closeModal} className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'>
                    <img
                        src="assets/close.svg"
                        alt="close"
                        className='w-6 h-6'
                    />
                </button>
                <img
                    src={image}
                    alt="title"
                    className='rounded-t-2xl w-full'
                />
                <div className='p-5'>
                    <h5 className='mb-2 text-2xl font-bold text-white '>{title}</h5>
                    <p className='mb-3 font-normal text-neutral-400 '>{description}</p>
                    {subDescription.map((subDescriptionItem, index) => (
                        <p className='mb-3 font-normal text-neutral-400 '>{subDescriptionItem}</p>
                    ))}
                    <div className='flex items-center justify-between mt-4 '>
                        <div className='flex gap-3'>
                            {tags.map((tagItem) => (
                                <img
                                    key={tagItem.id}
                                    src={tagItem.path}
                                    alt={tagItem.title}
                                    className='rounded-lg size-10 hover-animation '
                                />
                            ))}
                        </div>
                        <a
                            href={href}
                            target="_blank"
                            className='inline-flex items-center gap-1 font-medium hover:animation'>View Project
                            <img
                                src="assets/arrow-up.svg"
                                alt="arrow-up"
                                className='size-4'
                            />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default ProjectDetails
