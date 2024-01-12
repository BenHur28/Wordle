import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "@/app/components/navbar";
import Wordle from "@/app/components/wordle";

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
