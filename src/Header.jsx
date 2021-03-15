import {useState} from 'react';

const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Header = ({getMovies}) =>{

const [searchTerm,setSearchTerm] = useState('');


const handleOnChange = e =>{
    setSearchTerm(e.target.value);
}

const handleOnSubmit = e=>{

    e.preventDefault();
     if(searchTerm){
      getMovies(SEARCHAPI+searchTerm)
      setSearchTerm('');
       }
    }


    return(
        
        <header className="header">
            <h1>Movies</h1>
            <form onSubmit={handleOnSubmit}>
            <input type="search" value={searchTerm} onChange={handleOnChange} className="inp-search" placeholder="Search"/>
            </form>
        </header>
    )
}

export default Header;