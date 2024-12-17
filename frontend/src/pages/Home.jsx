import React from 'react'
import HomeIntro from '../components/HomeIntro'
import TestUploadForm from '../components/TestUploadForm'
import HomeClassesSection from '../components/HomeClassesSection'

function Home() {
  return (
    <div>
      <HomeIntro />
      <TestUploadForm />
      <HomeClassesSection />
    </div>
  )
}

export default Home
