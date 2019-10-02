import React from "react"
import styled from "styled-components"

const MapHolder = styled.div`
  iframe {
    width: 100%;
    height: 400px;
    @media screen and (min-width: 768px) {
      height: 660px;
    }
  }
`

export default () => (
  <section className="section-venue" id="venue">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>Venue</h2>
        </div>
      </div>
    </div>
    <MapHolder>
      <iframe
        title="Venue location on Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8021941956163!2d103.77148241475395!3d1.2931356990568366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1aff3f1cf5b1%3A0x7ae21f4141402cfd!2sShaw%20Foundation%20Alumni%20House!5e0!3m2!1sen!2ssg!4v1569419939027!5m2!1sen!2ssg"
        frameborder="0"
        allowfullscreen=""
      />
    </MapHolder>
  </section>
)
