import Film from "./Film";

export default function RatedFilms(props) {
  function removeMovie(index) {
    props.setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  }
  return (
    <>
      <h1
        style={{
          marginTop: "2rem",
          height: "4rem",
          textAlign: "center",
        }}
      >
        Your ratings of movies
      </h1>
      <div
        style={{
          display: "flex",
          //flexDirection: "column",
          //alignItems: "center",
        }}
      >
        {props.movies.map((movie, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Film
              title={movie.title}
              image={movie.imageUrl}
              rating={movie.rating}
              filmShown={true}
            />
            <button
              class="btn btn-dark"
              style={{ width: "10rem", height: "3rem", marginBottom: "1rem" }}
              onClick={() => removeMovie(index)}
            >
              Remove a rating
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
