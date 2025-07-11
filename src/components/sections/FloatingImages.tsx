
import { motion } from "motion/react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

interface FloatingImagesProps {
  images: string[];
}

export const FloatingImages = ({ images }: FloatingImagesProps) => {
  return (
    <Floating sensitivity={-0.5} className="h-full">
      <FloatingElement
        depth={0.5}
        className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
      >
        <motion.img
          src={images[0]}
          alt="Landscape with lake"
          className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </FloatingElement>

      <FloatingElement
        depth={1}
        className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
      >
        <motion.img
          src={images[1]}
          alt="Aerial beach view"
          className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        />
      </FloatingElement>

      <FloatingElement
        depth={4}
        className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
      >
        <motion.img
          src={images[2]}
          alt="Forest landscape"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        />
      </FloatingElement>

      <FloatingElement
        depth={2}
        className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
      >
        <motion.img
          src={images[3]}
          alt="Frozen lake aerial"
          className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        />
      </FloatingElement>

      <FloatingElement
        depth={1}
        className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
      >
        <motion.img
          src={images[4]}
          alt="Mountain lake reflection"
          className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        />
      </FloatingElement>
    </Floating>
  );
};
