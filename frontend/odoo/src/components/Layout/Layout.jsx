import React from 'react'
import Header from '../common/Header'

function Layout({children}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
