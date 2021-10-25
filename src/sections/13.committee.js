import React from "react"
import styled from "styled-components"

import CommitteeList from "../data/committee2021"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export default () => {
  return (
    <section className="section-committee">
      <div className="contain">
        <div className="vessel cols">
          <div className="left">
            <h2>
              2021
              <br /> Committee
            </h2>
          </div>

          <div className="right">
            <Grid>
              {CommitteeList.map((member) => {
                return (
                  <div style={styles.imageContainer}>
                    <img src={member.imgsrc} style={styles.imageStyle} />
                    <br />
                    {member.name}
                  </div>
                )
              })}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  imageContainer: {
    textAlign: "center",
    padding: 30,
  },
  imageStyle: {
    width: "70%",
  },
}
