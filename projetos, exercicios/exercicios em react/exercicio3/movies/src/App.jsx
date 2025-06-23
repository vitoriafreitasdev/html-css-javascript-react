
import './App.css'
import { useState } from "react";
import TrendingList from './components/TrendingList';

export default function App() {
  const movieArray = [
    {
      title: "Hitchhiker's Guide to the Galaxy",
      releaseYear: 2005,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
    },
    {
      title: "Alanzoka",
      releaseYear: 2013,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitchhikers_guide_to_the_galaxy.jpg"
    }
  ];
  const [movieData, setMovieData] = useState(movieArray);
  const [newMovie, setNewMovie] = useState({
    title: '',
    releaseYear: '',
    imageUrl: '',
  });

  const handleInputChange = (value, type) => {
    setNewMovie({
      ...newMovie,
      [type]: value
    });
  }

  const addMovie = (e) => {
    if(newMovie.title && newMovie.releaseYear && newMovie.imageUrl){
      setMovieData([...movieData, {
        title: newMovie.title,
        releaseYear: newMovie.releaseYear,
        imageUrl: newMovie.imageUrl
      }]);
     
      setNewMovie({
        title: '',
        releaseYear: '',
        imageUrl: ''
      });
    }
  }

  return (
    <div>
      <p>
        add a movie title:      
      </p>
      <input 
        type="text" 
        value={newMovie.title}
        onChange={(e) => handleInputChange(e.target.value, "title")}
      />
      <p>
        add a movie release year:      
      </p>
      <input 
        type="text" 
        value={newMovie.releaseYear}
        onChange={(e) => handleInputChange(e.target.value, "releaseYear")}
      />
      <p>
        add a movie url image:      
      </p>
      <input 
        type="text" 
        value={newMovie.imageUrl}
        onChange={(e) => handleInputChange(e.target.value, "imageUrl")}
      />

      <button onClick={addMovie}>adicionar</button> 
      <TrendingList movies={movieData} />
    </div>
  );
}
