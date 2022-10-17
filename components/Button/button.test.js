import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import Button from "./index";

describe("Button", () => {

    // Mocking an onPress function
    const handlePress = jest.fn(() => {
        return console.log('Button Pressed');
    });

    // Rendering the component before each test
    beforeEach(() => {
        render(<Button onPress={handlePress}>Hello</Button>)
    });

    // Testing if the component renders with the correct text
    // and variant
  it("renders correctly", () => {
    const button = screen.getByText("Hello");
    expect(button).toBeTruthy();
    expect(button.props.variant).toBe("default");

  });

  // Applies the variant passed through props
  it("applies the correct variant", () => {
    render(<Button variant="primary">Button Primary</Button>);
    const buttonPrimary = screen.getByText("Button Primary");
    expect(buttonPrimary.props.variant).toBe("primary");

    render(<Button variant="secondary">Button Secondary</Button>);
    const buttonSecondary = screen.getByText("Button Secondary");
    expect(buttonSecondary.props.variant).toBe("secondary");
  });


// Testing if the onPress function is called when the button is pressed
  it("calls onPress when pressed", () => {
    fireEvent.press(screen.getByText("Hello"));
    expect(handlePress).toHaveBeenCalled();
  });
});