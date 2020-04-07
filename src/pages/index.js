import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

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
    <Footer />
  </Layout>
)

export default IndexPage
