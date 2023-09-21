"use client";

import { signIn } from "next-auth/react";
import clsx from "clsx";
import style from "@/styles/Button.module.css";

export const LoginButton = () => {
	return (
		<button
			className={clsx(style.button85)}
			role='button'
			onClick={() =>
				signIn(undefined, {
					callbackUrl: "/gallery",
				})
			}>
			Login
		</button>
	);
};


