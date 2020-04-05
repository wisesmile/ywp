import React from "react"
import YAMLData from "../../content/teaching-schedule.yaml"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const TeachingSchedule = () => (
  <Layout>
    <SEO title="Schedule" />
    <p>
      <b>All classes are being conducted online via Zoom.</b>
    </p>{" "}
    <p>
      Visit{" "}
      <a href="http://www.yogapeacekula.com" target="_new">
        Yoga Peace Kula
      </a>{" "}
      and{" "}
      <a href="http://peacewarrioryoga.com/" target="_new">
        Peace Warrior Yoga and Wellness
      </a>{" "}
      for signup information and additional classes.{" "}
    </p>
    <p>Please consider supporting local yoga studios during this time.</p>
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{YAMLData.title}</h1>
      <ul>
        {YAMLData.content.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}
      </ul>
    </div>
    <Link to="/">Home</Link>
  </Layout>
)
export default TeachingSchedule
