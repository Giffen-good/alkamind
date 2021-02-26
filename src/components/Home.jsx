import React from 'react'
import Contact from 'components/Contact'
import Services from 'components/Services'
import LandingSection from 'components/LandingSection'
import Governance from 'components/Governance'

class Home extends React.Component {
  render () {
    return (
        <React.Fragment>
            <LandingSection />
            <Services />
            <Governance />
            <Contact />
        </React.Fragment>
    )
  }
}
export default Home
