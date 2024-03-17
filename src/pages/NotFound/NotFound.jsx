import React from "react"
import Layout from "components/Layout"
import Grid from "@mui/material/Grid"

export default function NotFound() {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={3}>
          <h1>404</h1>
        </Grid>
      </Grid>
    </Layout>
  )
}
