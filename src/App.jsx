import {useEffect,useState} from 'react';
import Header from './Header';
import Movie from './Movie';


const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";




const App = _ => {

    const[movies,setMovies] = useState([]);

    

    const getMovies = API =>{

          
         fetch(API)
        .then(response=>response.json())
        .then(json=>setMovies(json.results))
        .catch(error=>{
           console.log(error.name);
        });
    
    }

    useEffect( _ => {
   
            getMovies(APIURL);
     
    }, []);


    return ( 

    <>
    <Header getMovies={getMovies} />
        <div className="movie-container">
       
         {movies.map(movie=>
               <Movie key={movie.id} {...movie} />
            )}
        </div>

    </>
    );
}

export default App;