import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <p>
      In 1982, I began a formal practice of meditation. This opened the door
      into a study of Vedanta Philosophy, Yoga and wellness. I taught my first
      Hatha Yoga class in 1985.
    </p>
    <p>
      In 1986 I moved to Washington DC and attended classes at yoga centers
      throughout town. I participated at{" "}
      <a href="http://www.selfrevelationchurch.org/" target="_new">
        The Self Revelation Church of Absolute Monism
      </a>{" "}
      and immersed myself deeper into study and practice. The weekly services
      and programs focused on Advaita Vedanta, Kriya Yoga and Universality of
      Soul. I volunteered, worked on the grounds and was a member of the Bell
      Choir.
    </p>
    <p>
      I returned to Jersey in 2015 and discovered many studios close to home. I
      completed my Yoga Teacher Training 200-hour certification in 2017. I
      immediately began teaching in several local studios.
    </p>
    <p>
      My teaching and practice interests are varied; I have a focus on beginning
      students and those with special needs. I am inspired by the writings of
      Swami Kamalandanda, Swami Satchidananda, BKS Iyengar, and Pema Chodron.
    </p>
    <p>I’m the proud father of two amazing children.</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default About
