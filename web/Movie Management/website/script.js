document.addEventListener("DOMContentLoaded", function () {
  const searchResultContainer = document.querySelector(".searchResults");

  // function to handle error while fetching data
  async function fetchData() {
    searchResultContainer.innerHTML = "";

    try {
      const response = await fetch("http://localhost:3000/movies");
      const data = await response.json();

      // check if data is available
      if (data && data.length > 0) {
        data.forEach((movie) => {
          var movieElement = createMovieElement(movie);
          searchResultContainer.appendChild(movieElement);
        });
      } else {
        const movieNotFound = document.createElement("h1");
        movieNotFound.innerHTML = "Movie Not Found";
        searchResultContainer.appendChild(movieNotFound);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  }

  // function to search a particular movie
  async function searchMovie(movieName) {
    searchResultContainer.innerHTML = "";

    try {
      const response = await fetch("http://localhost:3000/movies");
      const data = await response.json();

      if (data && data.length > 0) {
        data.forEach((movie) => {
          if (movieName === movie.title) {
            var movieElement = createMovieElement(movie);
            searchResultContainer.appendChild(movieElement);
          }
        });
      } else {
        const movieNotFound = document.createElement("h1");
        movieNotFound.innerHTML = "Movie not Found!!";
        searchResultContainer.appendChild(movieNotFound);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // function to  display the movie details
  function createMovieElement(data) {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movieContainer");

    // display the title
    const titleElement = document.createElement("h2");
    titleElement.classList.add("title");
    titleElement.innerHTML = `Title: ${data.title}`;
    movieContainer.appendChild(titleElement);

    const genreElement = document.createElement("p");
    genreElement.classList.add("genre");
    genreElement.innerHTML = `Genre: ${data.genre}`;
    movieContainer.appendChild(genreElement);

    const directorElement = document.createElement("p");
    directorElement.classList.add("director");
    directorElement.innerHTML = `Director: ${data.director}`;
    movieContainer.appendChild(directorElement);

    const releaseYearElement = document.createElement("p");
    releaseYearElement.classList.add("release-year");
    releaseYearElement.innerHTML = `Release Year: ${data.releaseYear}`;
    movieContainer.appendChild(releaseYearElement);

    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.classList.add("delButton");
    deleteButtonElement.innerHTML = "Delete Movie";
    deleteButtonElement.addEventListener("click", () => {
      deleteMovie(data.id, movieContainer);
    });
    movieContainer.appendChild(deleteButtonElement);

    return movieContainer;
  }

  function deleteMovie(movieId, movieElement) {
    fetch(`http://localhost:3000/movies/${movieId}`, {
      method: "DELETE",
    })
      .then(() => {
        movieElement.remove();
      })
      .catch((error) => {
        console.error("Error deleting movie:", error);
      });
  }

  // Searching movie
  const searchButton = document.getElementById("submitButton");
  searchButton.addEventListener("click", function () {
    var movieName = document.getElementById("movieName").value;
    searchMovie(movieName);
  });

  // search movie after pressing enter
  var movieNameInput = document.getElementById("movieName");
  movieNameInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      var movieName = movieNameInput.value;
      searchMovie(movieName);
    }
  });
  fetchData();
});
