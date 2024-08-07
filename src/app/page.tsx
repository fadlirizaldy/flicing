"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { animateFromLeft, animateFromRight } from "@/animation";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLayout className="w-full min-h-screen">
      <main>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <motion.div
            className="text-6xl animate-pulse font-semibold font-montserrat italic text-slate-200"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={animateFromLeft}
          >
            Fadli's
          </motion.div>
          <motion.div
            className="text-6xl animate-pulse font-semibold font-montserrat italic text-slate-200"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={animateFromRight}
          >
            Slicing
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}
