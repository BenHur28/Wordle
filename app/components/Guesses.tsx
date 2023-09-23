import { cn } from "@/lib/utils";

type CurrentGuessProps = {
	guess: string[];
};

type SubmittedGuessesProps = {
	submittedGuesses: string[][];
	wordOfDay: string;
};

const CurrentGuess = ({ guess }: CurrentGuessProps) => {
	return (
		<div className="flex gap-x-2 mb-2">
			{Array.from({ length: 5 }).map((_, i) => (
				<span
					className="flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16"
					key={i}
				>
					{guess[i] || ""}
				</span>
			))}
		</div>
	);
};

const SubmittedGuesses = ({
	submittedGuesses,
	wordOfDay,
}: SubmittedGuessesProps) => {
	const isCorrect =
		submittedGuesses.length > 0 &&
		submittedGuesses[submittedGuesses.length - 1].join("") === wordOfDay;
	return (
		<>
			{submittedGuesses.map((guess, i) => {
				return <GuessRow key={i} guess={guess} />;
			})}
		</>
	);
};

const GuessRow = ({ guess }: CurrentGuessProps) => {
	return (
		<div className="flex gap-x-2 mb-2">
			{Array.from({ length: 5 }).map((_, i) => (
				<span
					className={cn(
						"flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16"
					)}
					key={i}
				>
					{guess[i]}
				</span>
			))}
		</div>
	);
};

const EmptyGuess = () => {
	return (
		<div className="flex gap-x-2 mb-2">
			{Array.from({ length: 5 }).map((_, i) => (
				<span
					className="flex justify-center items-center border-2 border-solid-black text-4xl h-16 w-16"
					key={i}
				></span>
			))}
		</div>
	);
};

export { EmptyGuess, SubmittedGuesses, CurrentGuess };
