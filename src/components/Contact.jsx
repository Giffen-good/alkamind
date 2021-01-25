import React from 'react'
class Contact extends React.Component {
  render () {
    return (
      <section id="contact" className="p-5 pt-6 container  is-max-desktop">
          <h2 className="is-size-1 mb-3">Contact</h2>
          <div className="columns">
            <div className="column">
              <p>Nulla sit amet posuere ex. Nam mollis sed magna ac feugiat. Donec et velit eget leo auctor suscipit. Curabitur nec dui vel dui venenatis imperdiet.</p>
              <address>
                <p className="mb-1"><strong>Email: </strong><a href="mailto:alf@alkamind.com">Alf@alkamind.com</a></p>
                <p className="mb-1"><strong>Phone Number: </strong><a href="tel:+14165745330">+1-647-876-7625</a></p>
                <p className="mb-1"><strong>LinkedIn Profile: </strong><a href="https://www.linkedin.com/in/alfrock/" target="_blank" rel="noreferrer">alfrock</a></p>
              </address>
            </div>
            <div className="column">
              <img src="/images/image-placeholder.jpg" />
            </div>
          </div>
      </section>
    )
  }
}
export default Contact
