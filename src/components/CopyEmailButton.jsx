import { button } from "motion/react-client"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "asyedraza85632@gmail.com";

    const handleClick = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 5000);
    }

    return (
        <motion.button
            onClick={handleClick}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 1.05 }}
        >
            <AnimatePresence mode="wait" >
                {copied ? (
                    <motion.p
                        className="flex items-center justify-center gap-2"
                        key="copied"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        <img
                            src="assets/copy-done.svg"
                            alt="copy-done-icon"
                            className="w-5" />
                        Copied to clipboard
                    </motion.p>
                ) : (
                    <motion.p
                        className="flex items-center justify-center gap-2"
                        key="copy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <img
                            src="assets/copy.svg"
                            alt="copy-icon"
                            className="w-5" />
                        Copy Email Address
                    </motion.p>)

                }
            </AnimatePresence>
        </motion.button>
    )
}

export default CopyEmailButton
