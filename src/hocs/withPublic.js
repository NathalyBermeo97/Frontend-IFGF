import { withAuthRedirect } from "./withAuthRedirect";

export function withPublic(Component, location = '/') {
  return withAuthRedirect({
    Component, 
    expectedAuth: false,
    location
  })
}
