import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <center>
      <iframe
        src="https://player.vimeo.com/video/280106874"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        title="Glenn walks"
      ></iframe>
      <p>
        <a href="https://vimeo.com/280106874">
          Walking with brother Glenn at Thorn Preserve, Woodstock NY.
        </a>{" "}
      </p>
    </center>
    <Link to="/about/">About</Link>&nbsp;<Link to="/schedule/">Schedule</Link>
  </Layout>
)

export default IndexPage
