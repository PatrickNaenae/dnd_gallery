import React from "react";
import clsx from "clsx";
import Loader from "@/styles/Loader.module.css";

const Loading: React.FC = () => {
	return (
		<div className={clsx(Loader.loader)}>
			<div style={{ "--i": 1 } as React.CSSProperties}></div>
			<div style={{ "--i": 2 } as React.CSSProperties}></div>
			<div style={{ "--i": 3 } as React.CSSProperties}></div>
			<div style={{ "--i": 4 } as React.CSSProperties}></div>
		</div>
	);
};

export default Loading;
