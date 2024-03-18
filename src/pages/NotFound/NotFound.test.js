import React from "react"
import { screen, render } from "@testing-library/react"
import NotFound from "./NotFound"

describe("NotFound page", () => {
  test("renders 404 text", () => {
    render(<NotFound />)
    const textElement = screen.getByText(404)

    expect(textElement).toBeInTheDocument()
  })
})
