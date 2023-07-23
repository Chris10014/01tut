import React from 'react'

const HeaderComponent = () => {
  const headerStyle = { 
      backgroundColor: "mediumblue",
      color: "#fff"
  };
  
  return (
    // HeaderComponent with inline style attached
    // Alternative: use headerStyle constant instead { ... }
    <header 
    // style={{ 
    //   backgroundColor: "royalblue",
    //   color: "#fff"
    //  }}
     >
        <h1>Groceries List</h1>
    </header>
  )
}

export default HeaderComponent