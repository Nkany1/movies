import React from "react"
import { Link } from "react-router-dom";
import "./hero.css"

const Hero = () => {
    return ( 
       
      <section className="section-hero">
        <div className="hero-wrapper">
           
           <div className="hero-title">
             <h3>Welcome To Awesome Movies</h3>
           </div>

           <div className="hero-button">
           <Link to="/popular">
             <button>Browse movies</button>
           </Link>
              

           </div>
        </div>
     </section>
          

     );
}
 
export default Hero;