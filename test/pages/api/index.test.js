import { render, screen } from "@testing-library/react";
import Home from "../../../pages/index";
import { useUser } from "@auth0/nextjs-auth0/client";

// Mock the useUser hook from @auth0/nextjs-auth0
jest.mock("@auth0/nextjs-auth0/client", () => ({
  useUser: jest.fn(),
}));

describe("Home", () => {
  it("renders without crashing", () => {
    useUser.mockReturnValue({ user: null, isLoading: false, error: null });
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Badfaith/,
    });
    console.log("Heading", heading);

    expect(heading).toBeInTheDocument();
  });
});
