"use client";

import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import galleryList from "@/app/data";
import styles from "@/styles/Gallery.module.css";
import Image from "next/image";
import Loading from "@/app/loading";
import { FcSearch } from "react-icons/fc";

interface CardProps {
	src: string;
	tags: string[];
	id: number;
	index: number;
	moveImage: (dragIndex: number, hoverIndex: number) => void;
}

const Card: React.FC<CardProps> = ({ src, tags, id, index, moveImage }) => {
	const ref = React.useRef(null);
	const [, drop] = useDrop({
		accept: "image",
		hover: (item: CardProps, monitor) => {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			}
			const hoverBoundingRect = (
				ref.current as HTMLElement
			)?.getBoundingClientRect();
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset
				? clientOffset.y - hoverBoundingRect.top
				: 0;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			moveImage(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: "image",
		item: () => {
			return { id, index };
		},
		collect: (monitor) => {
			return {
				isDragging: monitor.isDragging(),
			};
		},
	});

	const opacity = isDragging ? 0.5 : 1;

	drag(drop(ref));

	return (
		<div ref={ref} style={{ opacity }} className={styles.card}>
			<Image src={src} alt={tags[0]} width={200} height={200} />
			<div className={styles.tags}>
				{tags.map((tag) => (
					<div key={tag} className={styles.tag}>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};

const Gallery = () => {
	const [images, setImages] = React.useState(galleryList);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

	const moveImage = React.useCallback(
		(dragIndex: number, hoverIndex: number) => {
			setImages((prevCards) => {
				const updatedImages = prevCards.map((card, index) => {
					if (index === dragIndex) {
						return { ...card, index: hoverIndex };
					}
					if (index === hoverIndex) {
						return { ...card, index: dragIndex };
					}
					return card;
				});

				return updatedImages.sort((a, b) => a.index - b.index);
			});
		},
		[]
	);

	const filteredImages = images.filter((image) =>
		image.tags.some((tag) => tag.includes(searchTerm.toLowerCase()))
	);

	return (
		<main>
			{loading ? (
				<Loading />
			) : (
				<div className='flex flex-col overflow-hidden w-full px-5 py-10'>
					<div className='px-2 border border-gray-500 rounded-md  relative w-[100%] md:w-[50%] mb-6  focus:ring focus:border-none '>
						<input
							type='text'
							placeholder='Search by tag'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='w-full bg-transparent py-1 pr-5 placeholder-gray-400 focus:outline-none'
						/>
						<div className='absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none'>
							<FcSearch
								className='h-4 w-4 text-gray-400'
								aria-hidden='true'
							/>
						</div>
					</div>

					<div className={styles.cardContainer}>
						{React.Children.toArray(
							filteredImages.map((image, index) => (
								<Card
									src={image.img}
									tags={image.tags}
									id={image.id}
									index={index}
									moveImage={moveImage}
								/>
							))
						)}
					</div>
				</div>
			)}
		</main>
	);
};

export default Gallery;
