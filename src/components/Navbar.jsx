import React, { use } from "react";
import { useEffect, useState } from "react";
const Navbar = ({ setFiltered, setSearch, isMobile, setFilters }) => {
  const style = {
    navbar: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: "20px",
      paddingBottom: "20px",
      backgroundImage: "linear-gradient(to right, #6CADCC, #9428FF)",
    },
    input: {
      width: isMobile ? "50%" : "20%",
      height: isMobile ? "20px" : "30px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      padding: "5px 15px",
    },
    heading: {
      color: "white",
      fontSize: isMobile ? "20px" : "40px",
      marginBottom: isMobile ? "10px" : "20px",
    },
  };
  return (
    <div style={style.navbar}>
      <p style={style.heading}>People of GOT👑</p>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          setFiltered(e.target.value.length > 0);
          setFilters((prevFilters) =>
            prevFilters.map((filter) => ({ ...filter, checked: false }))
          );
        }}
        placeholder="Search"
        style={style.input}
      />
    </div>
  );
};

export default Navbar;
