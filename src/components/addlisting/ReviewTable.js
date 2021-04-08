import React from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { add_review, get_reviews, report_review } from "../../store/action";
import logo from "../../assets/images/favicon.png";

export default function ReviewTable({
  getReview,
  totalStars = 5,
  isOnProfile = false,
}) {
  const [currentUser, setCurrentUser] = React.useState();
  const [reviews, setReviews] = React.useState({
    userId: "",
    behaviour: 0,
    communication: 0,
    expertise: 0,
    recommendation: 0,
    reviewBars: {
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
    },
    reviews: [],
  });
  const [rating, setRating] = React.useState({
    avg_rating: 0,
    star_reviews: {
      behaviour: 0,
      communication: 0,
      expertise: 0,
      recommendation: 0,
    },
    no_of_reviews: {
      total_no_of_reviews: 0,
      five: 0,
      four: 0,
      three: 0,
      two: 1,
      one: 0,
    },
  });

  React.useEffect(() => {
    const details = JSON.parse(localStorage.getItem("__current_user__"));
    const user_id = isOnProfile
      ? details._id
      : JSON.parse(localStorage.getItem('"_ud_"'))._id;
    setReviews((pr) => {
      pr.userId = user_id;
      return pr;
    });
    setCurrentUser(details);

    //What can I say, I haven't bind get_reviews to redux (store) like prev dev
    // so and don't wanna change the pattern and structure of code/file
    // this is only way

    let response;
    async function fetchData() {
      if (user_id) {
        let dispatch = get_reviews(user_id);
        response = await dispatch();
        let { reviewsCollection } = response.data;

        setReviews((pr) => {
          return { ...pr, ...reviewsCollection };
        });
        if (reviewsCollection) {
          let avg_rating =
            (reviewsCollection.behaviour +
              reviewsCollection.communication +
              reviewsCollection.expertise +
              reviewsCollection.recommendation) /
            4;
          let star_reviews = {
            behaviour: reviewsCollection.behaviour,
            communication: reviewsCollection.communication,
            expertise: reviewsCollection.expertise,
            recommendation: reviewsCollection.recommendation,
          };
          let no_of_reviews = reviewsCollection.reviewBars;
          setRating({
            avg_rating,
            star_reviews,
            no_of_reviews,
          });
          getReview(avg_rating, star_reviews);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div className="col-lg-12" style={{ padding: 0 }}>
      {!reviews.reviews.length && <h4 className="bold py-3">No Reviews</h4>}
      <Reviews
        sellerId={reviews.userId}
        reviews={reviews.reviews}
        currentUser={currentUser}
        setReviews={setReviews}
        setRating={setRating}
        getReview={getReview}
        isOnProfile={isOnProfile}
      />
    </div>
  );
}

function Rating({ reviews, rating, totalStars = 5 }) {
  return (
    <div className="listing-description ">
      <div className="section-heading profile-description mt-4 shadow-sm mb-2 bg-light rounded">
        <div
          style={{
            boxShadow: "0px 1px 5px -3px",
          }}
        >
          <h2>Reviews</h2>
        </div>
        <div className="container">
          {reviews.reviews.length > 0 && (
            <div className="row pt-4">
              <div className="col-lg-4">
                <RatingAverage
                  rating={rating.avg_rating}
                  totalStars={totalStars}
                />
              </div>
              <div className="col-lg-8">
                <RatingBreakdown
                  noOfReviews={rating.no_of_reviews}
                  totalNoOfReviews={reviews.reviews.length}
                />
              </div>
              <div className="col-lg-12 m-2">
                <ReviewBreakdown userReview={rating.star_reviews} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RatingAverage({ rating, totalStars }) {
  const stars = (rating * totalStars) / 100;
  return (
    <div className="rating-block" style={{ justifyContent: "space-around" }}>
      <h4>Average user rating</h4>
      <h2 className="bold padding-bottom-7">
        {stars.toFixed(2)} <small>/ {totalStars}</small>
      </h2>
      <div style={{ maxWidth: "350px" }}>
        <ReviewStarRow fullWidth={true} stars={stars} totalStars={totalStars} />
      </div>
    </div>
  );
}

function ReviewBreakdown({ userReview, totalStars = 5 }) {
  return (
    <div className="col-lg-12">
      <h4>Reviews as Seller</h4>
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <ReviewBreakdownStar
          heading={"Seller communication level"}
          percent={userReview.communication}
          totalStars={totalStars}
        />
        <ReviewBreakdownStar
          heading={"Recommend to a friend"}
          percent={userReview.recommendation}
          totalStars={totalStars}
        />
        <ReviewBreakdownStar
          heading={"Service as described"}
          percent={userReview.expertise}
          totalStars={totalStars}
        />
        <ReviewBreakdownStar
          heading={"Seller behaviour"}
          percent={userReview.behaviour}
          totalStars={totalStars}
        />
        {/* <ReviewBreakdownStar heading={"Seller level in the field"} /> */}
      </div>
    </div>
  );
}

function ReviewBreakdownStar({ heading, percent = 0, totalStars = 5 }) {
  const stars = (percent * totalStars) / 100;
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12 my-2"
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h2>
        <small> {heading}</small>
      </h2>
      <ReviewStarRow stars={stars} totalStars={totalStars} fullWidth={true} />
    </div>
  );
}

function RatingBreakdown({ noOfReviews, totalNoOfReviews }) {
  return (
    <div className="col-lg-12">
      <h4>Rating breakdown</h4>
      <ReviewBreakdownBar
        label={5}
        totalReviews={totalNoOfReviews}
        noOfReviews={noOfReviews.five}
      />
      <ReviewBreakdownBar
        label={4}
        totalReviews={totalNoOfReviews}
        noOfReviews={noOfReviews.four}
      />
      <ReviewBreakdownBar
        label={3}
        totalReviews={totalNoOfReviews}
        noOfReviews={noOfReviews.three}
      />
      <ReviewBreakdownBar
        label={2}
        totalReviews={totalNoOfReviews}
        noOfReviews={noOfReviews.two}
      />
      <ReviewBreakdownBar
        label={1}
        totalReviews={totalNoOfReviews}
        noOfReviews={noOfReviews.one}
      />
    </div>
  );
}

function ReviewBreakdownBar({ label, totalReviews, noOfReviews }) {
  let percentage = (noOfReviews / totalReviews) * 100;
  return (
    <div className="row" style={{ justifyContent: "space-around" }}>
      <div style={{ width: "5%", lineHeight: "1", minWidth: "40px" }}>
        <div style={{ height: "9px", margin: "5px 2px" }}>
          {label}
          {"  "}
          <IoMdStar />
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <div className="progress" style={{ height: "9px", margin: "8px 2px" }}>
          <div
            className="progress-bar progress-bar-danger"
            role="progressbar"
            style={{ width: `${percentage}%`, backgroundColor: "#63c5da" }}
          >
            <span className="sr-only">
              {`${percentage}%`} Complete (danger)
            </span>
          </div>
        </div>
      </div>
      <div style={{ width: "5%", marginLeft: "10px" }}>{noOfReviews}</div>
    </div>
  );
}

function Reviews({
  sellerId,
  reviews,
  totalStars = 5,
  currentUser = null,
  setReviews,
  setRating,
  getReview = null,
  isOnProfile,
}) {
  let usersReview = reviews
    .map((rev) => (
      <UserReview
        key={rev._id}
        currentUser={currentUser}
        review={rev}
        totalStars={totalStars}
        isOnProfile={isOnProfile}
      />
    ))
    .reverse();

  return (
    <>
      {usersReview}

      {currentUser &&
        currentUser._id !== sellerId &&
        currentUser.user_type === "Buyer" && (
          <div className="review-block">
            {/* <h4 className="my-3">Share your experience</h4> */}
            <AddReview
              sellerId={sellerId}
              currentUser={currentUser}
              reviews={reviews}
              setReviews={setReviews}
              setRating={setRating}
              getReview={getReview}
            />
          </div>
        )}
    </>
  );
}

function UserReview({ currentUser, review, totalStars, isOnProfile }) {
  let [stars, setStars] = React.useState(0);
  let [reviewDesc, setReviewDesc] = React.useState("");
  let [error, setError] = React.useState("");
  let [isModalOpen, setModalOpen] = React.useState(false);

  let date = React.useRef();
  let errorTimer = React.useRef(null);

  let handleSubmit = async (event) => {
    event.preventDefault();
    let body = {
      seller_id: currentUser._id,
      review_id: review._id,
      description: reviewDesc,
    };

    //What can I say, I haven't bind add_review to redux (store) like prev dev
    // so and don't wanna change the pattern and structure of code/file
    // this is only way
    let dispatch = report_review(body);
    let response = await dispatch();

    if (response.data.error) {
      clearTimeout(errorTimer.current);
      setError(response.data.error);
      // setError("A problem has been occurred while submitting your data.");
      errorTimer.current = setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    if (response.data.isSuccessful) {
      review.isReported = true;
      setModalOpen(false);
    }
  };

  let handleChange = (event) => {
    setReviewDesc(event.target.value);
  };
  // const stars = React.useRef();
  React.useEffect(() => {
    let timestamp = new Date(review.timestamp);
    date.current = timestamp.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    let ratings =
      (review.communication +
        review.recommendation +
        review.expertise +
        review.behaviour) /
      400;
    // stars.current = ratings * totalStars;
    setStars(ratings * totalStars);
  }, [review, stars]);
  return (
    <div className="row col-lg-12 col-md-12 user-review-container">
      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 center-col review-img-container">
        <img
          src={!!review.image_uri ? review.image_uri : logo}
          className="img-rounded review-img"
        />
      </div>
      <div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div className="review-block-name">
              <a href="#">{review.reviewer_name}</a>
            </div>
            {/* <div className="review-block-date">{date.current}</div> */}
            <div
              className="review-block-rate"
              style={{ maxWidth: "250px", marginLeft: "-7px" }}
            >
              <ReviewStarRow
                stars={stars}
                totalStars={totalStars}
                size={20}
                fullWidth={true}
              />
            </div>
          </div>
          {!!isOnProfile && (
            <button
              disabled={!!review.isReported}
              className="btn btn-outline-danger"
              style={{ height: "50%" }}
              onClick={() => setModalOpen((ps) => !ps)}
            >
              {!review.isReported ? "Report" : "Reported"}
            </button>
          )}
        </div>
        <div className="review-block-description">{review.description}</div>
      </div>
      {!!isModalOpen && (
        <form
          onSubmit={handleSubmit}
          className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3"
          style={{ textAlign: "end" }}
        >
          <div className="form-group">
            <textarea
              className="form-control"
              id="reviewDescription"
              placeholder="Enter brief description about your experience with the seller"
              rows={5}
              value={reviewDesc}
              onChange={handleChange}
            />
          </div>
          {!!error && (
            <div className="alert alert-danger alert-dismissible fade show form-group">
              <strong>Error!</strong> {`${error}`}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                onClick={() => {
                  clearTimeout(errorTimer.current);
                  setError("");
                }}
              >
                &times;
              </button>
            </div>
          )}
          <button type="submit" className="btn btn-danger">
            Report Review
          </button>
        </form>
      )}
    </div>
  );
}

function UserReview2() {
  return (
    <div className="row col-lg-12">
      <div className="col-lg-3">
        <img
          src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
          className="img-rounded"
        />
        <div className="review-block-name">
          <a href="#">nktailor</a>
        </div>
        <div className="review-block-date">
          January 29, 2016
          <br />1 day ago
        </div>
      </div>
      <div className="col-lg-9">
        <div className="review-block-rate" style={{ maxWidth: "200px" }}>
          <ReviewStarRow />
        </div>
        <div className="review-block-title">this was nice in buy</div>
        <div className="review-block-description">
          this was nice in buy. this was nice in buy. this was nice in buy. this
          was nice in buy this was nice in buy this was nice in buy this was
          nice in buy this was nice in buy
        </div>
      </div>
    </div>
  );
}

function AddReview({
  currentUser,
  totalStars = 5,
  sellerId,
  reviews,
  setReviews,
  setRating,
  getReview,
}) {
  let [commStar, setCommStar] = React.useState(0);
  let [recomStar, setRecomStar] = React.useState(0);
  let [experStar, setExperStar] = React.useState(0);
  let [behaStar, setBehaStar] = React.useState(0);
  let [reviewDesc, setReviewDesc] = React.useState("");
  let [error, setError] = React.useState("");

  let errorTimer = React.useRef(null);

  let handleChange = (event) => {
    setReviewDesc(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let reviewsLength = reviews.length;

    if (!(commStar && recomStar && experStar && behaStar)) {
      console.log("ERROR");
      clearTimeout(errorTimer.current);
      setError("Every field must have a star");
      // setError("A problem has been occurred while submitting your data.");
      errorTimer.current = setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    let body = {
      seller_id: sellerId,
      reviewer_id: currentUser._id,
      reviewer_name: currentUser.fullname,
      image_uri: currentUser.seller_img,
      communication: (commStar / totalStars) * 100,
      behaviour: (behaStar / totalStars) * 100,
      expertise: (experStar / totalStars) * 100,
      recommendation: (recomStar / totalStars) * 100,
      description: reviewDesc,
    };

    //What can I say, I haven't bind add_review to redux (store) like prev dev
    // so and don't wanna change the pattern and structure of code/file
    // this is only way
    let dispatch = add_review(body);
    let response = await dispatch();

    if (response.data.error) {
      clearTimeout(errorTimer.current);
      setError(response.data.error);
      // setError("A problem has been occurred while submitting your data.");
      errorTimer.current = setTimeout(() => {
        setError("");
      }, 5000);
      setClear();
      return;
    }

    let currentUserRatingAvg =
      (body.behaviour +
        body.communication +
        body.expertise +
        body.recommendation) /
      4;

    let avg_rating_bg = 0;
    let star_reviews_bg = {};

    setRating((prevRating) => {
      let avg_rating =
        (prevRating.avg_rating * reviewsLength + currentUserRatingAvg) /
        (reviewsLength + 1);

      avg_rating_bg = avg_rating;
      let star_reviews = {
        behaviour:
          (prevRating.star_reviews.behaviour * reviewsLength + body.behaviour) /
          (reviewsLength + 1),
        communication:
          (prevRating.star_reviews.communication * reviewsLength +
            body.communication) /
          (reviewsLength + 1),
        expertise:
          (prevRating.star_reviews.expertise * reviewsLength + body.expertise) /
          (reviewsLength + 1),
        recommendation:
          (prevRating.star_reviews.recommendation * reviewsLength +
            body.recommendation) /
          (reviewsLength + 1),
      };

      star_reviews_bg = star_reviews;

      let currentUserStarRating = Math.round(
        (currentUserRatingAvg * totalStars) / 100
      );
      let starsString = "zero";
      if (currentUserStarRating === 0) starsString = "one";
      if (currentUserStarRating === 1) starsString = "one";
      if (currentUserStarRating === 2) starsString = "two";
      if (currentUserStarRating === 3) starsString = "three";
      if (currentUserStarRating === 4) starsString = "four";
      if (currentUserStarRating === 5) starsString = "five";

      prevRating.no_of_reviews[starsString] += 1;

      return {
        avg_rating,
        star_reviews,
        no_of_reviews: prevRating.no_of_reviews,
      };
    });

    getReview(avg_rating_bg, star_reviews_bg);

    setReviews((prevReviews) => {
      let reviews = { ...prevReviews };
      reviews.reviews.unshift({ ...body, date: "date" });
      return reviews;
    });
    setClear();
  };

  let setClear = () => {
    setCommStar("");
    setRecomStar("");
    setExperStar("");
    setBehaStar("");
    setReviewDesc("");
  };

  return (
    <div className="col-lg-12">
      {/* <div className="col-lg-2 center-col">
        <img
          src={currentUser.seller_img}
          className="img-rounded review-img img-hide"
        />
        <div className="review-block-name">
          <a href="#">{currentUser.fullname}</a>
        </div>
      </div> */}
      <div className="col-lg-12">
        <form onSubmit={handleSubmit}>
          <div
            className="row"
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 0,
            }}
          >
            <AddReviewStars
              heading={"Communication"}
              stars={commStar}
              clickHandler={(e) => {
                let newStars = +e.target?.value;
                setCommStar((prev) => newStars);
              }}
            />
            <AddReviewStars
              heading={"Recommend"}
              stars={recomStar}
              clickHandler={(e) => {
                let newStars = +e.target?.value;
                setRecomStar((prev) => newStars);
              }}
            />
            <AddReviewStars
              heading={"Service"}
              stars={experStar}
              clickHandler={(e) => {
                let newStars = +e.target?.value;
                setExperStar((prev) => newStars);
              }}
            />
            <AddReviewStars
              heading={"Behaviour"}
              stars={behaStar}
              clickHandler={(e) => {
                let newStars = +e.target?.value;
                setBehaStar((prev) => newStars);
              }}
            />
            {/* <AddReviewStars heading={"Seller level in the field"} />  */}
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="reviewTitle"
              placeholder="Title about your experience with the seller"
            />
          </div> */}

          <div className="form-group">
            <textarea
              className="form-control"
              id="reviewDescription"
              placeholder="Enter brief description about your experience with the seller"
              rows={5}
              value={reviewDesc}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="alert alert-danger alert-dismissible fade show form-group">
              <strong>Error!</strong> {`${error}`}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                onClick={() => {
                  clearTimeout(errorTimer.current);
                  setError("");
                }}
              >
                &times;
              </button>
            </div>
          )}
          <button
            type="submit"
            className="btn"
            style={{
              // width: "100%",
              backgroundColor: "#63c5da",
              color: "whitesmoke",
            }}
          >
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
}

function AddReviewStars({
  heading,
  stars,
  clickHandler = null,
  totalStars = 5,
}) {
  return (
    <div
      className="form-group col-lg-3 col-md-4 col-sm-6 my-4"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        color: "#444",
      }}
    >
      <h4>
        <small> {heading}</small>
      </h4>
      {/* <div className="review-block-rate" style={{ maxWidth: "200px" }}> */}
      <ReviewStarRow
        stars={stars}
        clickHandler={clickHandler}
        totalStars={totalStars}
        fullWidth={true}
      />
      {/* </div> */}
    </div>
  );
}

function AddReviewStars2({
  heading,
  stars,
  clickHandler = null,
  totalStars = 5,
}) {
  return (
    <div
      className="row form-group"
      style={{
        justifyContent: "space-between",
        justifyItems: "center",
      }}
    >
      <h5>{heading}</h5>
      <div className="review-block-rate" style={{ maxWidth: "200px" }}>
        <ReviewStarRow
          stars={stars}
          clickHandler={clickHandler}
          totalStars={totalStars}
        />
      </div>
    </div>
  );
}

export function ReviewStarRow({
  fullWidth = false,
  stars = 0,
  totalStars = 5,
  clickHandler = null,
  size = 25,
  color = "#63c5da",
}) {
  let [starsArray, setStarsArray] = React.useState([]);

  React.useEffect(() => {
    const fullStar = Math.floor(stars);
    let newStarArray = [];
    for (let i = 0; i < fullStar; i++) {
      newStarArray.push(
        <ReviewStar
          value={newStarArray.length + 1}
          key={newStarArray.length + 1}
          type="full"
          clickHandler={clickHandler}
          size={size}
          color={color}
        />
      );
    }

    let halfStar = Math.round(stars - fullStar);
    if (fullStar !== totalStars) {
      newStarArray.push(
        <ReviewStar
          value={newStarArray.length + 1}
          key={newStarArray.length + 1}
          type={halfStar === 0 ? "outline" : "half"}
          clickHandler={clickHandler}
          size={size}
          color={color}
        />
      );
    }

    let outlineStar = totalStars - newStarArray.length;
    if (outlineStar > 0) {
      for (let i = 0; i < outlineStar; i++) {
        newStarArray.push(
          <ReviewStar
            value={newStarArray.length + 1}
            key={newStarArray.length + 1}
            type="outline"
            clickHandler={clickHandler}
            size={size}
            color={color}
          />
        );
      }
    }

    setStarsArray(newStarArray);
  }, [stars, totalStars]);

  return (
    <div
      className="row"
      style={{
        maxWidth: fullWidth ? "100%" : "150px",
        justifyContent: "space-around",
        margin: fullWidth ? "0 auto" : " 0 -15px",
      }}
    >
      {starsArray}
    </div>
  );
}

function ReviewStar({
  value = 0,
  clickHandler = null,
  type = "outline",
  size = 25,
  color = "#63c5da",
}) {
  return (
    <button
      type="button"
      className="btn btn-default btn-sm"
      style={{ width: "15%", padding: "0.05rem" }}
      value={+value}
      onClick={clickHandler}
    >
      {type === "full" && (
        <IoMdStar
          style={{ pointerEvents: "none" }}
          size={size}
          // color="#007bff"
          color={color}
        />
      )}
      {type === "half" && (
        <IoMdStarHalf
          style={{ pointerEvents: "none" }}
          size={size}
          color={color}
        />
      )}
      {type === "outline" && (
        <IoMdStarOutline
          style={{ pointerEvents: "none" }}
          size={size}
          color={color}
        />
      )}
    </button>
  );
}
