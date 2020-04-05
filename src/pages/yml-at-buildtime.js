import React from "react"
import YAMLData from "../../content/My-YAML-Content.yaml"
import Layout from "../components/layout"
import SEO from "../components/seo"

const YAMLbuildtime = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{YAMLData.title}</h1>
      <ul>
        {YAMLData.content.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}
      </ul>
    </div>
  </Layout>
)
export default YAMLbuildtime
