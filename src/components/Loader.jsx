import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    const {progress} = useProgress();

  return (
    <Html center className="font-normal center text-xl">{progress}% Loaded</Html>
  )
}

export default Loader
