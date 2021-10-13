import { render } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("must render the component", () => {
    render(<App />);
  });
});
