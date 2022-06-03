import React,{useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { send } from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/style.css"

export default function Contact (){

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Phacharapol Phukana', 
    reply_to: '',
    message: '',
   
  });
  

const handleInputChange = e =>{
  
  setToSend({ ...toSend, [e.target.name]: e.target.value });
};

const handleFormSubmit = e => {
  e.preventDefault()
  send(
    'service_y1vm3if',
   'template_8rcqgdf',
    toSend,
    'veT3Pa2iT-uIetRH6'
  )
    .then((response) => {
      if(response){
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name: '', 
          reply_to: '',
          message: '',
        })
      }
      
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
}

    const position =[46.20392836265345, -119.24711241440663]
    return (
      <div className="container">
        <h2 className="contacth2">Contact Form</h2>
        <div className="row">
          <form className="col-lg-6 form" onSubmit={handleFormSubmit}>
          <input
              type='text'
              name='from_name'
              placeholder='Your Name'
              value={toSend.from_name}
              onChange={handleInputChange}
            />
            <br></br>
            <input
              type='text'
              name='to_name'
              placeholder='to name'
              value={toSend.to_name}
              onChange={handleInputChange}
            />
            <br></br>
            <input
              type='email'
              name='reply_to'
              placeholder='Your email'
              value={toSend.reply_to}
              onChange={handleInputChange}
            />
            <br></br>
           <textarea
              type='text'
              name='message'
              rows= "4"
              cols= "25"
              placeholder='Your message'
              value={toSend.message}
              onChange={handleInputChange}
            />
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