import React from "react";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Hero from "./components/heroSection/Hero";
import Navbar from "./components/navBar/Navbar";
import Popular from "./components/popularMovies/Popular";
import About from "./components/about/About";
import MovieDetails from "./components/movieDetails/MovieDetals";


function App() {
  return (
       
    
       <Router>
          <Navbar />
        <Switch>
         <Route path="/" component={Hero}  exact>
           <Hero />
         </Route>

         <Route path="/popular" component={Popular}  exact>
           <Popular />
         </Route>

         <Route path="/about" component={About}  exact>
           <About/>
         </Route>

         <Route path="/moviedetails/:id">
           <MovieDetails />
         </Route>

         

        </Switch>

       </Router>
  
      
  );
}

export default App;
