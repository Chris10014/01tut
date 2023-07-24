import React from 'react'

const HeaderComponent = ({ title }) => {
  
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

//Set default props used when the expected prop isn't present
HeaderComponent.defaultProps = {
  title: "Default Title"
}

export default HeaderComponent