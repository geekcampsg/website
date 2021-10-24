import React from "react"
import styled from "styled-components"

import TerenceImage from "../images/committee/featured/terence.png"
import AlanImage from "../images/committee/featured/alan.png"
import AmbroseImage from "../images/committee/featured/ambrose.png"
import HongKhengImage from "../images/committee/featured/hongkheng.png"
import LutherImage from "../images/committee/featured/luther.png"
import VinaImage from "../images/committee/featured/vina.png"
import PerwylImage from "../images/committee/featured/perwyl.png"
import StephImage from "../images/committee/featured/steph.png"
import FazliImage from "../images/committee/featured/fazli.png"

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
              <div style={styles.imageContainer}>
                <img src={PerwylImage} style={styles.imageStyle} />
                <br />
                Perwyl Liu
              </div>

              <div style={styles.imageContainer}>
                <img src={LutherImage} style={styles.imageStyle} />
                <br />
                Luther Goh
              </div>

              <div style={styles.imageContainer}>
                <img src={TerenceImage} style={styles.imageStyle} />
                <br />
                Terence Lim
              </div>

              <div style={styles.imageContainer}>
                <img src={AlanImage} style={styles.imageStyle} />
                <br />
                Alan Swan
              </div>

              <div style={styles.imageContainer}>
                <img src={HongKhengImage} style={styles.imageStyle} />
                <br />
                Hong Kheng Yap
              </div>

              <div style={styles.imageContainer}>
                <img src={AmbroseImage} style={styles.imageStyle} />
                <br />
                Ambrose Chua
              </div>

              <div style={styles.imageContainer}>
                <img src={VinaImage} style={styles.imageStyle} />
                <br />
                Vina Melody
              </div>

              <div style={styles.imageContainer}>
                <img src={StephImage} style={styles.imageStyle} />
                <br />
                Stefanie Seah
              </div>

              <div style={styles.imageContainer}>
                <img src={FazliImage} style={styles.imageStyle} />
                <br />
                Fazli Mansor
              </div>
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
