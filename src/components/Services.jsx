import React from 'react'
class Services extends React.Component {
  render () {
    const services = [
      {
        name: 'Organizational Change Management',
        serviceList: [
          'Internal Organizational Change Conference',
          'Change Readiness Cultural Design',
          'Knowledge Management Design',
          'Executive Coaching'
        ]
      },
      {
        name: 'Strategy & Program Management',
        serviceList: [
          'Transformation Agenda',
          'Initiatives Roadmap',
          'Program Structure & Compliance Design',
          'Program Design for Organizational Accountability',
          'Coordination services for Compliance Accreditation'
        ]
      },
      {
        name: 'Systems & Service Management Design',
        serviceList: [
          'Designing Availability, Performance & Asset Management',
          'Integrated design of tools and service management workflow',
          'Workgroup design & structure for skills based workflow'
        ]
      }
    ]
    return (
      <section id="services" className="primary-bg-color">
        <div className="pl-5 pr-5 pb-6 pt-6 container content is-max-desktop">
          <h2 className="is-size-1 mb-3">Services</h2>
          <div className="container has-text-left pb-4 is-max-desktop">
            <p>With dacades of experience in the evolution of digital technology in a variety of international setting and diverse set of business, we can bring a significant level of empathy to the challenges you are experiencing. Let us start with an exploratory conversation.</p>
          </div>
          <ul className="ml-0">
          {
            services.map((service, i) => {
              return (
                <li key={i} className="has-text-left" style={{ listStyleType: 'none' }}>
                  <h3 className="is-size-4">{service.name}</h3>
                  <ol className="is-lower-roman ml-5">
                  {
                    service.serviceList.map((subService, j) => {
                      return <li key={j} className="pt-1 pb-1">{subService}</li>
                    })
                  }
                  </ol>
                </li>
              )
            })
          }
          </ul>
        </div>
      </section>
    )
  }
}
export default Services
