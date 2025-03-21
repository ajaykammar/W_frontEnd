import React from 'react'
import MissionVistion from '../components/Aboutus/MissionVistion'
import Team from '../components/Aboutus/team'
import CustomerReview from '../components/CustomerReview '
import LogoSlider from '../components/Sliders/LogoSlider'
import Statistics from '../components/Aboutus/Statistics'
import ContactForm from '../components/ContactForm'

const About = () => {
  return (
    <div>
      <MissionVistion/>
      <Statistics/>
      <Team/>
      <ContactForm/>
      <CustomerReview/>
      <LogoSlider/>
    </div>
  )
}

export default About
