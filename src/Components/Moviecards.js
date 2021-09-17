import MovieCard from './MovieCard';
import './StyleMoviecards.css';


const Movies = ({moviesData ,searchIteam}) => {
 
    return (
     
      <div className="movies">
         style= {{ display : "flex",
         justifycontent:  "space-around",
         flexwrap: "wrap" ,
      }}
      
        {moviesData
        .filter((el)=> el.name.includes.tolowercase ()(searchIteam.tolowercase() ))
        .map((el) => ( <MovieCard movie={el} key={el.id}  />
          
        ))}
      </div>
    );
  };
  export default  Movies