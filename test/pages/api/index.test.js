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
      name: "Badfaith",
    });

    const loginButton = screen.getByRole("button", {
      name: "Log in",
    });

    const textInputArea = screen.getByRole("textbox");

    expect(heading).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(textInputArea).toBeInTheDocument();
  });
});

// getByRole(
//   // If you're using `screen`, then skip the container argument:
//   container: HTMLElement,
//   role: string,
//   options?: {
//     hidden?: boolean = false,
//     name?: TextMatch,
//     description?: TextMatch,
//     selected?: boolean,
//     busy?: boolean,
//     checked?: boolean,
//     pressed?: boolean,
//     suggest?: boolean,
//     current?: boolean | string,
//     expanded?: boolean,
//     queryFallbacks?: boolean,
//     level?: number,
//     value?: {
//       min?: number,
//       max?: number,
//       now?: number,
//       text?: TextMatch,
//     }
//   }): HTMLElement
