import React from 'react'
import Navbar from '../components/Navbar'

export default function Layouts({ children, openFilter, filters }) {
  return (
    <React.Fragment>
      <Navbar openFilter={openFilter} filters={filters} />
      {children}
    </React.Fragment>
  )
}
