import { createRouter } from "@storeon/router"

export default createRouter([
  ["/", () => ({ page: "game" })],
  ["/gameover", () => ({ page: "gameover" })],
])
