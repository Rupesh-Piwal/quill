"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../app/api stack.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex">
      <div className="container mx-auto flex flex-col  py-10 gap-[50px] ">
        <motion.p
          className="text-[22px] md:text-[42px] bg-gradient-to-r from-[#781f71] to-[#4f279d] text-transparent bg-clip-text mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Unleash your creativity and share your stories with the world.
        </motion.p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center justify-between">
            <Image
              src={HeroImage}
              alt="Quill Writing"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl w-[500px]"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, id{" "}
            <br />
            beatae fugiat harum fugit saepe asperiores animi perferendis? <br />
            Reprehenderit culpa distinctio eius consectetur quasi quidem <br />
            aliquid, autem eveniet deleniti amet debitis nam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
