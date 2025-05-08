import './App.css';
import { useState } from 'react';

function App() {
  const [movie, setMovie] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [recommend, setRecommend] = useState(false);
  const [display, setDisplay] = useState([]);

  const [movieError, setMovieError] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [recommendError, setRecommendError] = useState("");


  const moviesubmit = (e) => {
    e.preventDefault();
    if (movie === "") {
      setMovieError("Enter Movie Title");
      return;
    }

    if (review.length < 10) {
      setReviewError("Review must be at least 10 characters");
      return;
    }

    if (rating === "") {
      setRatingError("Select a rating");
      return;
    }

    if (!recommend) {
      setRecommendError("Please confirm recommendation");
      return;
    }


    const newMovie = { movie, review, rating, recommend };
    setDisplay([...display, newMovie]);

    setMovie("");
    setReview("");
    setRating("");
    setRecommend(false);
    setMovieError("");
    setReviewError("");
    setRatingError("");
    setRecommendError("");

  }
  return (

    <>
      {

        <div className="container mt-5">
          <center> <h2>Movie Review App</h2></center>
          <div className="d-flex justify-content-center r min-vh-100 bg-light">
            <div className="container p-4 shadow rounded bg-white" style={{ maxWidth: "600px", width: "100%" }}>
              <form onSubmit={moviesubmit}>
                <div className='row g-3'>
                  {/* Movie tital */}
                  <div className="col-md-6">
                    <label htmlFor="moviename" className="form-label">Movie Tital</label>
                    <input type="text"
                      className="form-control"
                      id="moviename"
                      name="name"
                      value={movie}
                      onChange={(e) => {
                        setMovie(e.target.value);
                        setMovieError("")
                      }}
                    />
                    {movieError && <small className="text-danger">{movieError}</small>}

                  </div>

                  {/* Review */}
                  <div className="col-md-6">
                    <label>Review:</label> <br />
                    <textarea
                      value={review}

                      onChange={(e) => {
                        setReview(e.target.value)
                        setReviewError("");
                      }
                      }
                    />
                    {reviewError && <small className="text-danger">{reviewError}</small>}

                  </div>
                </div>

                {/* Rating */}
                <div className='row g-3'>
                  <div className="col-md-6">
                    <label>Rating:</label>
                    <div>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <label key={num} style={{ marginRight: '10px' }}>
                          {num}
                          <input
                            type="radio"
                            name="rating"
                            value={num}
                            checked={rating === String(num)}
                            onChange={(e) => {
                              setRatingError("");
                              setRating(e.target.value)
                            }}
                          />

                        </label>
                      ))}
                    </div>
                    {ratingError && <small className="text-danger">{ratingError}</small>}

                  </div>

                  <div className='col-md-6'>
                    <label><br></br>
                      <input
                        type="checkbox"
                        checked={recommend}
                        onChange={(e) => {
                          setRecommend(e.target.checked)
                          setRecommendError("")
                        }
                        }
                      />
                      Recommend this movie
                    </label> <br></br>
                    {recommendError && <small className="text-danger">{recommendError}</small>}

                  </div>
                </div>


                <button type="submit" className=' mt-3 mb-1 btnn'>Submit Review</button>
                <hr></hr>
              </form>

              {
                display.map((item, index) => (

                  <div key={index}>
                    <p> <strong> Movie Name :</strong>{item.movie}</p>
                    <p> <strong> Movie Review :</strong>{item.review}</p>
                    <p> <strong> Movie Rating :</strong>{item.rating}</p>
                    <p> <strong> Recommended  :</strong> {item.recommend ? 'Yes' : 'No'}</p>
                    <hr></hr>
                  </div>

                ))
              }
            </div>
          </div>


        </div>

      }
    </>
  );
}
export default App;
