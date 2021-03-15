const IMGPATH = "https://image.tmdb.org/t/p/w1280";
 
const Movie = ({title,overview,poster_path,vote_average}) =>{

    const setColorAverage = average =>{

        if(average >= 8){
            return 'green';
        }else if(average >=6 ){
            return 'orange';
        }else{
            return 'red';
        }
    }

    return(
        <div className="movie">
            <img  src={(poster_path)?IMGPATH+poster_path:"https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} title={title} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <small className={`tag ${setColorAverage(vote_average)}`}>{vote_average}</small>
            </div>
            <div className="movie-over">
                <p>{overview?overview:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reiciendis!"}</p>
            </div>
        </div>

       

    )
};

export default Movie;
