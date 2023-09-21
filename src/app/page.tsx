"use client";

import { LoginButton } from "@/components/button.component";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<main
			className='flex flex-col justify-center items-center w-[100vw] h-[100vh] overflow-hidden'
			style={{ backgroundImage: "url(/bg.jpg)" }}>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<motion.h1
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='text-center text-3xl text-off-white mb-5 z-50'>
				Welcome to Sparkles
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='text-center text-sm w-2/4 text-off-white mb-5 z-50'>
				Step into a world of visual wonders at our Image Gallery, where
				each frame tells a story, captures a moment, and sparks
				imagination.
			</motion.p>
			<LoginButton />
		</main>
	);
}
