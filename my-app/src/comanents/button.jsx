import React from 'react'

const Button = ({text,status}) => {
  return (
    <div>
        <p>{text}</p>
      <button onClick={()=>alert(text)}>clik</button>
      <h1>{status && "companent"}</h1>
    </div>
  )
}

export default Button