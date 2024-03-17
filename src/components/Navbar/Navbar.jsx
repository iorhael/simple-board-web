import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import { HOME_PATH } from "App"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            href={HOME_PATH}
            underline="none"
            variant="h6"
            sx={{ color: "white", flexGrow: 1 }}
          >
            Simple board
          </Link>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
