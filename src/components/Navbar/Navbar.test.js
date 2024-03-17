import React from "react"
import { screen, render } from "@testing-library/react"
import Navbar from "./Navbar"

describe("Navbar component", () => {
  test("renders link with project name", () => {
    render(<Navbar />)
    const projectName = screen.getByRole("link", { name: /simple board/i })

    expect(projectName).toBeInTheDocument()
  })

  test("renders Login button", () => {
    render(<Navbar />)
    const loginButton = screen.getByRole("button", { name: /login/i })

    expect(loginButton).toBeInTheDocument()
  })

  test("renders Sign up button", () => {
    render(<Navbar />)
    const signupButton = screen.getByRole("button", { name: /sign up/i })

    expect(signupButton).toBeInTheDocument()
  })
})
