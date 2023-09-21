"use client";

import { SessionProvider } from "next-auth/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type Props = {
	children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
	return (
		<SessionProvider>
			<DndProvider backend={HTML5Backend}>{children}</DndProvider>
		</SessionProvider>
	);
};
