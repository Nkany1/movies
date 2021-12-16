import React from "react"
import { Link } from "react-router-dom"
import "./movie.css"


const IMG_API = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) => {
   if(vote >= 7){
      return "green"
   }else if(vote >= 5 && vote < 70 ){
      return "yellow"
   }else if( vote > 0 && vote < 5){
      return "red"
   }else if (vote === 0) {
      return "grey"
   }

}

const Movie = ({title , poster_path , overview , vote_average , id}) => {

   
    return ( 
   
   <Link to={`/moviedetails/${id}`} className="movie-links">
      <div className="movie">  
          <div className="img-container">    
           <img src={IMG_API + poster_path} alt={title}  />
          </div>
         <div className="info-average">
           <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
         </div>
         
         
            <div className="movie-info">
               <h3>{title}</h3>
            </div>
       </div>  
   </Link>
   
     );
}
 
export default Movie;