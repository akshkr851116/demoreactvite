import React from "react";
import { useNavigate } from "react-router-dom";


function Contact() {
	let navigate=useNavigate()
  let handleChange=((e)=>{
		navigate("/contactdetails")

	})
	return (
		<div>
			<h2>Contact</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, modi.
			</p>
			<button onClick={handleChange}>Show conatct details</button>
		</div>
	);
}

export default Contact;