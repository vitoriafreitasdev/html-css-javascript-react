export default function Movie({ title, releaseYear, imageUrl }) {
  return (
    <div className="movie">
      <img src={imageUrl} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <h4>Released in {releaseYear}</h4>
      </div>
    </div>
  );
}