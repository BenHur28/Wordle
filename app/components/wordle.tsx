"use client";
import { useState, useEffect } from "react";

const Wordle = () => {
	const [guess, setGuess] = useState<Array<string>>([]);

	useEffect(() => {
		const handleKeyDown = ({ key }: { key: string }) => {
			if (key === "Backspace") {
				setGuess((prev) => {
					const temp = [...prev];
					temp.pop();
					return temp;
				});
			}
			if (guess.length < 5) {
				const isChar = /^[a-z]$/.test(key);
				if (isChar) {
					setGuess((prev) => [...prev, key]);
				}
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [guess.length]);

	return (
		<div>
			<div className="flex mt-10 gap-x-2">
				{guess.map((char, i) => (
					<span
						className="flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16"
						key={i}
					>
						{char}
					</span>
				))}
			</div>
		</div>
	);
};

export default Wordle;
