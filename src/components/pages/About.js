import React from "react";

export default function About (){
    return(
        <div className="aboutDiv">
            <h2 className="aboutH2">About Me</h2>
            <p>My full name is long, I goes by Dap. I'm 28 years old with a passion of learning new technology
                and knowledge. I was an Auto Mechanic for 8 years and decide to change career path. One day I got introduce to
                Web Development and I have been in love since. Now!! I'm on the journey to pursue this career. 
            </p>
            <div>
                <h2 className="aboutH2">Projects</h2>
                <div class="containers">
                   <div class="card">
                    <div class="box">
                     <div class="content">
                      <h2>01</h2>
                      <h4>Web</h4>
                      <h3><a href="https://phacharapol18.github.io/car-brand-word-games/" target = "_blank">Car-brand-word-games</a></h3>
                      <h4>github</h4>
                      <p><a className="a" href="https://github.com/Phacharapol18/car-brand-word-games" target = "_blank">Car-brand-word-games</a></p>
                     </div>
                    </div>
                  </div>

                  <div class="card">
                   <div class="box">
                    <div class="content">
                     <h2>02</h2>
                     <h4>Web</h4>
                      <h3><a href="https://phacharapol18.github.io/Day-planer/" target = "_blank">Day planer</a></h3>
                      <h4>github</h4>
                      <p><a className="a" href="https://github.com/Phacharapol18/Day-planer" target = "_blank">Day planer</a></p>
                    </div>
                   </div>
                  </div>

                  <div class="card">
                   <div class="box">
                    <div class="content">
                     <h2>03</h2>
                     <h4>Video Walk Through</h4>
                      <h3><a href="https://drive.google.com/file/d/1qlJ8w0TzwyAbUFb01pvIOsyFIvrOJAn7/view" target = "_blank">SocialNetwork Api</a></h3>
                      <h4>github</h4>
                      <p><a className="a" href="https://github.com/Phacharapol18/SocialNetwork" target = "_blank">SocialNetwork Api</a></p>
                    </div>
                   </div>
                  </div>

                  <div class="card">
                   <div class="box">
                    <div class="content">
                     <h2>04</h2>
                     <h4>Web</h4>
                      <h3><a href="https://guarded-harbor-06421.herokuapp.com/" target = "_blank">Sesh</a></h3>
                      <h4>github</h4>
                      <p><a className="a" href="https://github.com/Phacharapol18/Sesh" target = "_blank">Sesh</a></p>
                    </div>
                   </div>
                  </div>
                </div>
           </div>
        </div>
    )
}