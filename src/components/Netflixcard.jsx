import React from "react";
import styled from 'styled-components';          //styled component

const Netflixcard = (props) => {
  const { img, id, name, description, watchUrl, rating } =
    props.series;
  const limittexttowords = (words, wordlimit) => {
    const text = words.slice(" ");
    return text.length > wordlimit ? text.slice(0, wordlimit) : words;
  };
  const paraStyle = {
    margin: "1.2rem 0",
    marginBottom: "45px",
  };
  //style by inline style
  /*const ratingBackground = {
    background: rating >= 8.5 ? "#3CB371" : "#ff8c00",
    borderRadius: "50%",
    padding: "5px",
  };*/

  const IMG=styled.img({            //how to give style to component easily
    maxHeight: "10rem"
  })
  //style by class

  // const RatingClass = rating >= 8.5 ? "blockbuster" : "average";

  const Button = styled.a`
  background-color: ${(props) => (props.rating >= 8.5 ? "#3CB371" : "#ff8c00")};
  color: white; /* Ensure text color is white */
  border-radius: 5px; /* Add a border radius */
  padding: 0.5rem 1rem; /* Add padding */
  text-align: center; /* Center the text */
  text-decoration: none; /* Remove underline */
  
  &:hover {
    background-color: ${(props) => (props.rating >= 8.5 ? "#2e8b57" : "#ff7043")};
    box-shadow:${(props) => (props.rating >= 8.5 ? "2px 2px 10px rgb(0, 255, 102)":"2px 2px 10px #ff8c00")};
  }
`;
const Rating=styled.span`
 background: ${(props)=>props.rating >= 8.5 ? "#3CB371" : "#ff8c00"};
    border-radius:50%;
    padding: 5px;

`
  return (
    <>
      {/* <div className="contai">  */}
      <div className="col-md-4" key={props.index}>
        <div className="card" style={{ width: "18rem" }}>
          <IMG src={img} className="img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {id}. {name}
            </h5>
            <div>
              {" "}
              {/* Rating: <span style={ratingBackground}>{rating}</span>{" "} */}
              Rating: <Rating rating={rating}>{rating}</Rating>{" "}
            </div>
            <p className="card-text" style={paraStyle}>
              {limittexttowords(description, 68)}...
            </p>
            {/* <a
              href={watchUrl}
              className={`btn btn-primary ${RatingClass}`}
              target="_blank"
            >
              watch now
            </a> */}
            <Button rating={rating}
              href={watchUrl}
              // className={`btn btn-primary`}
              target="_blank"
            >
              watch now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Netflixcard;
