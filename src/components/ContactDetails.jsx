import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactDetails() {
  const navigate=useNavigate()
  let handleChange=((e)=>{
    navigate("/contact")
  })
  let handleChange2=((e)=>{
    navigate("/")
  })
    
  return (
    <div>
        <h2>Contact No</h2>
        <p>9122994814</p>
        <p>7631457585</p>  
        <h2>Email Id</h2> 
        <p>akshkr85111@gmail.com</p>
        <p>kshkr85111@gmail.com</p>   
        <button onClick={handleChange}>Go Back</button>&nbsp;&nbsp;&nbsp;
        <button onClick={handleChange2}>Go Home</button>
    </div>
  )
}