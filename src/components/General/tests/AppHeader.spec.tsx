import { screen, render } from "@testing-library/react";
import AppHeader from "../AppHeader";

const props = {
    header: "Header",
};

describe("AppHeader", () => {
    it("should render the AppHeader component", () => {
        render(<AppHeader {...props} />);
        expect(screen.getByText("Header")).toBeInTheDocument();
    });
});
