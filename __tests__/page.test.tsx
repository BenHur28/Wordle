import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "@/app/components/navbar";
import Wordle from "@/app/components/wordle";
import Keyboard from "@/app/components/keyboard";
import { EmptyGuess } from "@/app/components/Guesses";
import { CurrentGuess } from "@/app/components/Guesses";
import { SubmittedGuesses } from "@/app/components/Guesses";

describe("Navbar", () => {
	it("renders the header", () => {
		render(<Navbar />);

		const header = screen.getByRole("heading");

		expect(header).toBeInTheDocument;
	});
});

describe("Wordle", () => {
	it("renders the wordle", () => {
		render(<Wordle wordOfDay="hello" />);

		const div = screen.getByTestId("wordle");

		expect(div).toBeInTheDocument();
	});
});

describe("Keyboard", () => {
	it("renders the keyboard", () => {
		render(<Keyboard keyPressHandler={handleKeyInput} />);

		const div = screen.getByTestId("keyboard");

		expect(div).toBeInTheDocument();
	});
});

function handleKeyInput(key: string): void {
	throw new Error("Function not implemented.");
}

describe("Empty Guess", () => {
	it("renders the empty guesses", () => {
		render(<EmptyGuess />);

		const div = screen.getByTestId("empty");

		expect(div).toBeInTheDocument();
	});
});

describe("Current Guess", () => {
	it("renders the current guess", () => {
		const word = "hello";
		const charMap = word
			.split("")
			.reduce<Record<string, number>>((acc, char) => {
				if (!acc.hasOwnProperty(char)) {
					acc[char] = 1;
				} else {
					acc[char] += 1;
				}
				return acc;
			}, {});
		render(<CurrentGuess guess={[]} wordOfDay={""} charMap={charMap} />);

		const div = screen.getByTestId("current");

		expect(div).toBeInTheDocument();
	});
});

describe("Current Guess", () => {
	it("renders the current guess", () => {
		const word = "hello";
		const charMap = word
			.split("")
			.reduce<Record<string, number>>((acc, char) => {
				if (!acc.hasOwnProperty(char)) {
					acc[char] = 1;
				} else {
					acc[char] += 1;
				}
				return acc;
			}, {});
		render(<CurrentGuess guess={[]} wordOfDay={"hello"} charMap={charMap} />);
	});
});

describe("Submitted Guesses", () => {
	it("renders the submitted guess", () => {
		const word = "hello";
		const charMap = word
			.split("")
			.reduce<Record<string, number>>((acc, char) => {
				if (!acc.hasOwnProperty(char)) {
					acc[char] = 1;
				} else {
					acc[char] += 1;
				}
				return acc;
			}, {});
		render(
			<SubmittedGuesses
				submittedGuesses={[]}
				wordOfDay={"hello"}
				charMap={charMap}
			/>
		);
	});
});
