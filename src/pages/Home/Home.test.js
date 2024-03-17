import React from "react"
import { screen, render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Home from "./Home"
import mockHomeService from "_mocks_/mockHomeService"
import mockGreetingMessage from "_mocks_/mockGreetingMessage"

describe("Home page", () => {
  test("renders greeting message", async () => {
    await act(async () => render(<Home homeService={mockHomeService} />))
    const greetingMessage = screen.getByText(mockGreetingMessage.data)

    expect(greetingMessage).toBeInTheDocument()
  })

  test("renders a landscape image", async () => {
    await act(async () => render(<Home homeService={mockHomeService} />))
    const displayedImage = document.querySelector("img")

    expect(displayedImage.src).toContain("landscape.jpg")
  })
})
