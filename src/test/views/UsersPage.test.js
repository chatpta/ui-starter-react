import { render, screen } from "@testing-library/react";
import App from "../../App/App";

test('renders home page link', () => {
    render(<App />);
    const linkElement = screen.getByText(/users/i);
    expect(linkElement).toBeInTheDocument();
});
