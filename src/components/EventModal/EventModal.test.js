import { prettyDOM, render } from "@testing-library/react";
import { EventModal } from ".";
import { mockNextUseRouter } from "../../test_util";

describe("Event modal testing", () => {
  mockNextUseRouter({
    route: "/",
    pathname: "/eventos",
    query: "",
    asPath: "",
  });
  it("should render component", () => {
    const event = {
      title: "this is an event",
      description: "this is a description",
    };

    const component = render(<EventModal isOpen={true} event={event} />);
    //component.debug()
    component.getByText("this is an event");
  });

  it("should not allowed to signin a event", () => {
    const event = {
      title: "new event",
      description: "description",
      number: 5,
      inscriptions: [1, 2, 3, 4, 5],
    };

    const component = render(<EventModal isOpen={true} event={event} />);
    const button = component.queryByText("Sin cupones");
    console.log(prettyDOM(button));
    expect(button).toHaveTextContent("Sin cupones");
  });
});
