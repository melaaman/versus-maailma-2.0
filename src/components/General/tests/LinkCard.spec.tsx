import { screen, render } from "@testing-library/react";
import LinkCard from "../LinkCard";

describe("LinkCard", () => {
    it("should render LinkCard component", () => {
        render(
            <LinkCard
                image="https://source.unsplash.com/random"
                content="content"
            />
        );
        expect(screen.getByText("content")).toBeInTheDocument();
    });

    it("should contain img tag", () => {
        render(
            <LinkCard
                image="https://source.unsplash.com/random"
                content="content"
            />
        );
        expect(screen.getByRole("img")).toBeInTheDocument();
    });
});
