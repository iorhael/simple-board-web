import React, { useEffect, useState } from "react"
import Layout from "components/Layout"
import Grid from "@mui/material/Grid"
import Image from "mui-image"
import landscape from "./landscape.jpg"

export default function Home({ homeService }) {
  const [data, setData] = useState("")

  useEffect(() => {
    homeService
      .getGreeting()
      .then((message) => {
        setData(message.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Layout>
      <Grid container spacing={0} direction="column" alignItems="center">
        <Grid item xs={3}>
          <h2>{data}</h2>
        </Grid>
        <Grid item>
          <Image src={landscape} style={{ borderRadius: 25 }} />
        </Grid>
      </Grid>
    </Layout>
  )
}
