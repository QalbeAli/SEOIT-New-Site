import AboutStory from '@/components/AboutPageComponents/AboutStory'
import CardGrid from '@/components/AboutPageComponents/CardGrid'
import MoreService from '@/components/AboutPageComponents/MoreService'
import Motto from '@/components/AboutPageComponents/Motto'
import ProfileGrid from '@/components/AboutPageComponents/ProfileGrid'
import Team from '@/components/AboutPageComponents/Team'
import React from 'react'

const About = () => {
  return (
    <>
    <div className='my-20'>
      <AboutStory />
      <Motto />
      <MoreService />
      <CardGrid />
      <Team />
      <ProfileGrid />
    </div>
    </>
  )
}

export default About