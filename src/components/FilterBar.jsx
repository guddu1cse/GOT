import React from "react";

const FilterBar = ({
  setFiltered,
  setSearch,
  isMobile,
  filters,
  setFilters,
}) => {
  const style = {
    container: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      backgroundColor: "white",
      paddingInline: "30px",
      paddingTop: "20px",
      paddingBottom: "20px",
      gap: "10px",
    },
    button: {
      button: "none",
      borderRadius: "5px",
      padding: "5px 10px",
      cursor: "pointer",
      fontSize: isMobile ? "10px" : "12px",
    },
  };
  return (
    <div style={style.container}>
      {filters.map((filter) => {
        return (
          <button
            key={filter.id}
            style={{
              ...style.button,
              color: filter.checked ? "black" : "white",
              borderColor: filter.checked ? "black" : "white",
              backgroundColor: filter.checked ? "white" : "black",
            }}
            onClick={() => {
              setFilters((prevFilters) => {
                return prevFilters.map((prevFilter) => {
                  return {
                    ...prevFilter,
                    checked: prevFilter.id === filter.id,
                  };
                });
              });
              setFiltered(true);
              setSearch(
                filter.name.substring(0, filter.name.length - 1).toLowerCase()
              );
              console.log(filter.name);
            }}
          >
            {filter.name}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
