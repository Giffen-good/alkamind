import React from 'react'
class Contact extends React.Component {
  render () {
    return (
      <section id="contact" className="pl-5 pr-5 pb-5 container  is-max-desktop">
          <h2 className="is-size-1 mb-3">Contact</h2>
          <div className="columns">
            <div className="column">
              <p>Let us start with a conversation around context, needs and wants.</p>
              <address>
                <p className="mb-1"><strong>Email: </strong><a href="mailto:alf@alkamind.com">Alf@alkamind.com</a></p>
                <p className="mb-1"><strong>Phone Number: </strong><a href="tel:+14165745330">+1-416-574-5330</a></p>
                <p className="mb-1"><strong>LinkedIn Profile: </strong><a href="https://www.linkedin.com/in/alfrock/" target="_blank" rel="noreferrer">alfrock</a></p>
              </address>
            </div>
            <div className="column">
              <img src="/images/stratified-governance-model.jpg" />
            </div>
          </div>
      </section>
    )
  }
}
export default Contact
