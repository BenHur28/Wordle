import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import Navbar from "@/app/components/navbar";

describe("Navbar", () => {
	it("renders the header", () => {
		render(<Navbar />);
		const header = screen.getByRole("heading");
		const headerText = "WORDLE";

		expect(header).toHaveTextContent(headerText);
	});
});
