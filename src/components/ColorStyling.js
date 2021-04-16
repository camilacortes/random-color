import React from 'react'

export default function ColorStyling(props) {
  return (
    <div>
      color: {document.body.style.backgroundColor = '#' + props.backgroundColor}
    </div>
  )
}
