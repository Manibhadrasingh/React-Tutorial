
import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
  return ReactDom.createPortal(
      <h1>Portal</h1>,
      document.getElementById('Portal-root')
  )
}

export default PortalDemo
