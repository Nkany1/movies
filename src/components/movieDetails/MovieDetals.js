import React, { useEffect, useState } from "react"
import "./movieDetails.css"
import { useParams } from "react-router-dom";
import FormInput from "../Forminput/FormInput";


const URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US"

const MovieDetails = () => {
    
    const {id} = useParams();
    const[movie , setMovie] = useState(null);
    
    
   useEffect(() => {
      
      async function getMovie(){
          try {
              const response = await fetch(`${URL}${id}${API_KEY}`)
              const data = await response.json()   
               setMovie(data);        
             
          } catch (error) {
              console.log(error); 
          }
       
      }
      getMovie()

   }, [id , movie])

      
const setVoteClass = (vote) => {
   if(vote >= 7){
      return "green"
   }else if(vote >= 5 && vote < 7 ){
      return "yellow"
   }else if( vote > 0 && vote < 5){
      return "red"
   }else if (vote === 0) {
      return "grey"
   }

}

    return ( 
   
    <>
    <div className="bg">
      <section className="section-wrapper">
         <div className="movie-img">
            <img src={movie && `https://image.tmdb.org/t/p/w1280${movie.poster_path}`}  alt="movie"/>
         </div>
            <div className="movie-detail">
               <p>
                 <span className="movie-data">Name</span>
                  <h3>{movie && movie.original_title}</h3>
               </p>

               <p>
                 <span className="movie-data">Rating</span>
                  <h3 className={`tag ${setVoteClass(movie && movie.vote_average)}`}>{movie && movie.vote_average}</h3>
               </p>

               <p>
                 <span className="movie-data">Description</span>
                  <article>{movie && movie.overview}</article>
               </p>
               { movie &&
              
                <p>
                  <span className="movie-data">Genres</span>
                   <h3>{movie.genres.map((item, index) =>{
                       return item && <span key={item.name}>{item.name}</span> 
                   })}</h3>  
                </p> }      
            </div>
     </section>
     <div className="movie-form" >
        <FormInput />
     </div>
   </div>
   </>
   
     );
}
 
export default MovieDetails;