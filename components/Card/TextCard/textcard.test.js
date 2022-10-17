import "@testing-library/jest-native/extend-expect";
import { render, screen, within } from "@testing-library/react-native";
import React from "react";
import TextCard from "./index";

textDefaultStyle = {
  position: "relative",
  color: "#ff5757",
  fontWeight: "bold",
  top: -5,
};
describe("TextCard", () => {

    // Rendering the component before each test
  beforeEach(() => {
    render(
      <TextCard
        title="Test Title"
        logo={require("../../../assets/LogoSangueBom.png")}
        variant="liked"
        commentCount={5}
      >
        Test Text
      </TextCard>
    );
  });

    // Testing if the component renders with the correct text
  it("renders correctly", () => {
    const textCard = screen.getByTestId("text-card");
    expect(textCard).toBeTruthy();
  });

  // Testing if the component renders with the correct image according 
    // to the variant
  it("applies the correct image to 'liked' variant", () => {
    const icon = screen.getByTestId("icon");
    const image = within(icon).getByTestId("heart-full-icon");

    expect(image).toBeTruthy();
    expect(image.props.source).toBe(
      require("../../../assets/heart-full-icon.png")
    );
  });

  // Testing if the component applies the correct style to the texts
  it("applies the correct properties to text", () => {
    let text = screen.getByTestId("comment-count");
    expect(text).toBeTruthy();
    expect(text).toHaveStyle(textDefaultStyle);
    expect(text).toHaveTextContent("5");

    text = screen.getByTestId("share-points");
    expect(text).toBeTruthy();
    expect(text).toHaveStyle(textDefaultStyle);
    expect(text).toHaveTextContent("0");
  });
});
