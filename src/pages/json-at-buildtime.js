import React from "react"
import JSONData from "../../content/My-JSON-Content.json"
import Layout from "../components/layout"
import SEO from "../components/seo"

const JSONbuildtime = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{JSONData.title}</h1>
      <ul>
        {JSONData.content.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}
      </ul>
    </div>
  </Layout>
)
export default JSONbuildtime
