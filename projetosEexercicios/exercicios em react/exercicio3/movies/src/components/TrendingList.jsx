import Movie from './Movie.jsx'

export default function TrendingList({ movies }) {
  return (
    <div className="trending-list">
      {movies.map((movie, index) => (
        <Movie 
          key={index}
          title={movie.title}
          releaseYear={movie.releaseYear}
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  );
}
