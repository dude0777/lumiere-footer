import React from "react";
import Logo from "./sample.webp";
import '../../App.css';
import Footer from "../Footer";
export const Home = () => {
  
  return (
    
      
      <>
        <div className='container'>
          <div>
          <img className='sample' src={Logo} alt="lumiereicon" />
          </div>
          <div className='div2'>
                  National Level Techno-Cultural Fest
             <div className="PricesWorth">
               <br></br>Prices Worth <br></br><p>363K</p><br></br>
             </div>
          </div>
          
          <div className='div3'>
              <div className="container1">
                  <div className="about">
                      <h4>About</h4>
                  </div>
                      <div className="info">
                          <p> Lumiere is the celebration of life. <br></br>
                            We celebrate Lumiere with the purpose of life which is not merely survival, but to thrive and do it 
                            with some passion and love, which results in a game, The game of life. We are setting up the stage to find yourself in these cultural 
                            programmes and competitions as we aim Lumiere ‘23 to set the bar one up higher than before. This is a celebration of unity where 
                            people congregate, rising above their narrow prejudices and shallow preferences, ripping apart the chains of politics, religion, region, 
                            etc. It is a platform where differences are forgotten but they are not surrendered, in the name of love and reverence for a fellow being. 
                            Lumiere ‘23 will not just welcome the 'future engineers', this is for all students who have the courage to show and tell what they can 
                            do if given proper stages. A place where people from all walks of life can gather and revel in their comfort. Lumiere’23 is an 
                            opportunity, a platform, to show you the path, so that all may benefit. Lumiere’23 is something you wouldn't want to miss.
                          </p>
                        </div>
            </div>
          
          </div>
        </div>
        <Footer className='footer'/>
      </>
      
      

  
  );
};
