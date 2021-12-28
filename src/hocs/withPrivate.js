import { withAuthRedirect } from "./withAuthRedirect";

export function withPrivate(Component, location= '/login') {
  return withAuthRedirect({
    Component, 
    expectedAuth: true,
    location
  })
}
