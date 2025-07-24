import {motion} from "motion/react";

const Card = (props) => {
    return props.image && !props.text ?
        <motion.img
            className="absolute w-15 cursor-grab"
            src={props.image}
            style={props.style}
            whileHover = {{scale:1.05}}
            drag
            dragConstraints = {props.containerRef}
            dragElastic={1}
        /> :
        (
            <motion.div
                className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
                style={props.style}
                 whileHover = {{scale:1.05}}
                 drag
                dragConstraints = {props.containerRef}
                dragElastic={1}
            >
                {props.text}
            </motion.div>
        )
}

export default Card
