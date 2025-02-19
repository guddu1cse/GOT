import React from "react";
import { useState } from "react";
const Card = (cardData) => {
  const [hover, setHover] = useState(false);
  const style = {
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
      height: "200px",
      padding: "5px",
      backgroundColor: "#B4D8E9",
      borderRadius: "10px",
    },
    image: {
      width: "80px",
      aspectRatio: "1",
      borderRadius: "50%",
      border: "2px solid #000",
      background: `url(${cardData.cardData.image}) no-repeat center / contain`,
    },
    name: {
      fontWeight: "bold",
      marginTop: "10px",
      color: "black",
    },
    description: {
      marginTop: "5px",
      marginBottom: "5px",
      color: "black",
      textAlign: "center",
      overflow: "hidden",
      fontSize: "12px",
      textOverflow: "ellipsis",
    },
    wikiLink: {
      cursor: "pointer",
      color: hover ? "blue" : "#000",
      textDecoration: "none",
      border: hover ? "1px solid blue" : "1px solid #000",
      borderRadius: "3px",
      padding: "5px 10px",
      backgroundColor: "#B4D8E9",
    },
  };

  return (
    <div style={style.cardContainer}>
      <div style={style.image}></div>
      <div>
        <p style={style.name}>{cardData.cardData.name}</p>
      </div>
      <div style={style.description}>{cardData.cardData.description}</div>
      <a
        href={cardData.cardData.wikiLink}
        target="_blank"
        rel="noopener noreferrer"
        style={style.wikiLink}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        KNOW MORE
      </a>
    </div>
  );
};

export default Card;
