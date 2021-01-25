import React from 'react'
import Contact from 'components/Contact'
import Services from 'components/Services'
import LandingSection from 'components/LandingSection'

class Home extends React.Component {
  render () {
    return (
        <React.Fragment>
            <LandingSection />
            <Services />
            <Contact />
        </React.Fragment>
    )
  }
}
export default Home
