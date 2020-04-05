import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <p>
      In 1982, I began a formal practice of meditation. This opened the door
      onto the study of Vedanta Philosophy and Hatha Yoga and a curiosity about
      wellness. I taught my first Hatha Yoga class in 1985.
    </p>
    <p>
      In 1986 I moved to Washington DC and attended classes at yoga centers
      throughout town. I attended services at The Self Revelation Church of
      Absolute Monism and immersed myself deeper into study and practice. The
      weekly services and programs focused on Advaita Vedanta, Kriya Yoga and
      teachings regarding Universality of Soul.
    </p>
    <p>
      I returned to Jersey in 2015 and discovered many studios close to home. In
      2017 in completed my Yoga Teacher Training 200-hour certification. I
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
