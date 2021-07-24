/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "../styles/global.css"

const Layout = ({ children }) => {

  return (
    <>
      <div>
        <main>{children}</main>
<<<<<<< HEAD
        <footer className="ml-3 text-winter-gray">
=======
        <footer className="text-center">
>>>>>>> a0c718a5c41d53a7a1d2d2b96b3dab1b094983e9
          © {new Date().getFullYear()}, Semilla Consciente
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
