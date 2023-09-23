"use client";
import { useState, useEffect, useMemo } from "react";
import { CurrentGuess, EmptyGuess, SubmittedGuesses } from "./Guesses";

const totalGuessMax = 6;

type WordleProps = {
	wordOfDay: string;
};

const Wordle = ({ wordOfDay }: WordleProps) => {
	const [submittedGuesses, setSubmittedGuesses] = useState<string[][]>([]);
	const [guess, setGuess] = useState<Array<string>>([]);

	useEffect(() => {
		const handleKeyDown = ({ key }: { key: string }) => {
			const isChar = /^[a-z]$/.test(key);
			const isBackspace = key === "Backspace";
			const isEnter = key === "Enter";
			const isGuessFinished = guess.length === 5;

			if (isBackspace) {
				setGuess((prev) => {
					const temp = [...prev];
					temp.pop();
					return temp;
				});
			} else if (isChar && !isGuessFinished) {
				setGuess((prev) => [...prev, key]);
			} else if (isGuessFinished && isEnter) {
				setSubmittedGuesses((prev) => [...prev, guess]);
				setGuess([]);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [guess, guess.length]);

	console.log(submittedGuesses);

	const isCorrect =
		submittedGuesses.length > 0 &&
		submittedGuesses[submittedGuesses.length - 1].join("") === wordOfDay;

	const charMap = useMemo(() => {
		return wordOfDay.split("").reduce<Record<string, number>>((acc, char) => {
			if (!acc.hasOwnProperty(char)) {
				acc[char] = 1;
			} else {
				acc[char] += 1;
			}
			return acc;
		}, {});
	}, [wordOfDay]);

	return (
		<div>
			<div className="mt-10">
				<SubmittedGuesses
					submittedGuesses={submittedGuesses}
					wordOfDay={wordOfDay}
					charMap={charMap}
				/>
				{!isCorrect && (
					<CurrentGuess guess={guess} wordOfDay={wordOfDay} charMap={charMap} />
				)}
				{Array.from({
					length: totalGuessMax - submittedGuesses.length - (isCorrect ? 0 : 1),
				}).map((_, i) => (
					<EmptyGuess key={i} />
				))}
			</div>
		</div>
	);
};

export default Wordle;
