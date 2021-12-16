import React , {useState} from "react";
import {Link} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    
   const [isMobile , setIsMobile] = useState(false);

    return (  
        <nav className="navbar">

           <Link to="/" className="logoHome">
             <h2 className="logo" >Awesome Movies</h2>
           </Link>
           <ul className= {isMobile ? "nav-links-mobile" :"nav-links"} 
               onClick={() => setIsMobile(false)}
           >
                <Link to="/" className="home">
                  <li>Home</li>
                </Link>

                <Link to="/popular" className="popular">
                  <li>Popular Movies</li>
                </Link>

                <Link to="/about" className="about">
                 <li>About Developer</li>
              </Link>
           </ul>
           <button className="mobile-menu-icon"
             onClick={() => setIsMobile(!isMobile)}
           >
             {isMobile ? (
               <i className="fas fa-times"></i>
             ) : (
               <i className="fas fa-bars"></i>
             )}
           </button>
        </nav>

     );
}
 
export default Navbar;