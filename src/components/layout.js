import React from "react"
import Footer from "../components/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
