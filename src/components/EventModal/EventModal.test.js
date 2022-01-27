import {
  createEvent,
  fireEvent,
  prettyDOM,
  render,
} from "@testing-library/react";
import { EventModal } from ".";
import { mockNextUseRouter } from "../../test_util";

// jest.spyOn(require("../../context/AuthContext"), 'useAuth').mockImplementation(() => ({
//   currentUser: { _id: "1212", name: "migue" },
// }));

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
      inscriptions: ["1212", 2, 3, 4, 5],
    };

    const component = render(<EventModal isOpen={true} event={event} />);
    const button = component.getByText("Sin cupones");
    expect(button.getAttribute('disabled')).toBe(true)
    // expect(button).toHaveTextContent("Sin cupones");
  });
});
