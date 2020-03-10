/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import '../styles/index.css'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer className="text-center bg-gray-900 text-gray-500 pb-3">
          © {new Date().getFullYear()} Desenvolvido por
          {` `}
          <a
            href="https://www.flatcodesm.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flatcode
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
