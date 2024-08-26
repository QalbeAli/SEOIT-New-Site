import AboutStory from '@/components/AboutPageComponents/AboutStory'
import CardGrid from '@/components/AboutPageComponents/CardGrid'
import MoreService from '@/components/AboutPageComponents/MoreService'
import Motto from '@/components/AboutPageComponents/Motto'
import ProfileGrid from '@/components/AboutPageComponents/ProfileGrid'
import Team from '@/components/AboutPageComponents/Team'
import React from 'react'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { SphereMask } from "@/components/magicui/sphere-mask";
import { BentoDemo } from "@/components/AnimationComponents/BentoDemo";
import SplineCube from '@/components/SplineComponents/SplineCube'

const About = () => {
  return (
    <>
    <div className='my-20'>
      <AboutStory />
      <Motto />
      <SplineCube />
      <SphereMask />
      <MoreService />
      <BentoDemo />

      {/* <CardGrid /> */}
      <Team />
      <ProfileGrid />
      <ShootingStars />
      <StarsBackground />
    </div>
    </>
  )
}

export default About