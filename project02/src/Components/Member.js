import React from 'react'

const Member = ({team, name}) => {
    
    const welStyle = {
        fontSize:"25px",
        color:"black",
        backgroundColor:"ivory",
        width:"400px",
        margin:"auto",
    }
    
  return (
    <div style={welStyle} align="center">
        {team}<br></br>
        이름 : {name}
        <hr color='red'></hr>
    </div>
  )
}

export default Member