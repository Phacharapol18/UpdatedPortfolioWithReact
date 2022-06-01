import React,{useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/style.css"

export default function Contact (){

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  

const handleInputChange = e =>{
  
  if(e.target.name === 'fullName'){
    setFullName(e.target.value)
  } else if (e.target.name === 'email') {
    setEmail(e.target.value)
  } else if(e.target.name === 'text') {
    setText(e.target.value)
  } 
};

const handleFormSubmit = e => {
  e.preventDefault()

  setFullName('')
  setEmail('')
  setText('')
  alert('Form has submitted')
}

    const position =[46.20392836265345, -119.24711241440663]
    return (
      <div className="container">
        <h2 className="contacth2">Contact Form</h2>
        <div className="row">
          <form className="col-lg-6 form" onSubmit={handleFormSubmit}>
             <input value = {fullName}
             name = "fullName"
             onChange={handleInputChange}
             type = "text"
             placeholder="Full Name" />
             <br></br>
             <input value = {email}
             name = "email"
             onChange={handleInputChange}
             type = "email"
             placeholder="Your Email" />
              <br></br>
             <textarea value = {text}
             name = "text"
             onChange={handleInputChange}
             rows="4"
             cols= "50"
             placeholder="Your Message">
            </textarea>
            <br></br>
            <button className="submitBtn">
              submit
            </button>
          </form>
         <div className="leaflet-container col-lg-6">
           <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                   <Popup>
                    <h5>Home</h5>
                   </Popup>
                  </Marker>
           </MapContainer>
          </div>
      </div> 
    </div>


    )
}