import { button } from "motion/react-client"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
// import resume from ""

const ShowResumeButton = () => {
    const [downloaded, setDownloaded] = useState(false);

    const handleClick = () => {
        setDownloaded(true);

        setTimeout(() => {
            setDownloaded(false);
        }, 5000);
    }

    return (
        <motion.button
            onClick={handleClick}
            className="relative px-1 py-4 text-sm text-center rounded-full  bg-gray-400 w-[14rem] cursor-pointer overflow-hidden"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 1.05 }}
        >
            <AnimatePresence mode="wait" >
                {downloaded ? (
                    <a href="/assets/syed_muhammad_raza_ali_resume.pdf" download>
                        <motion.p
                            className="flex items-center justify-center gap-2  text-black"
                            key="copied"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                        >
                            <img
                                src="assets/check.png"
                                alt="check"
                                className="w-5" />
                            Downloaded Successfully
                        </motion.p>
                    </a>
                ) : (
                    <a href="/assets/syed_muhammad_raza_ali_resume.pdf" download>
                        <motion.p
                            className="flex items-center justify-center gap-2 text-black"
                            key="copy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            <img
                                src="assets/download.png"
                                alt="download-resume"
                                className="w-5 cursor-pointer"
                            />
                            Download Resume
                        </motion.p>
                    </a>
                )

                }
            </AnimatePresence>
        </motion.button>
    )
}

export default ShowResumeButton
