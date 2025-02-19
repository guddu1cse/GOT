import { use, useState } from "react";
import Card from "./components/Card";
import data from "./data/data";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";

function App() {
  const [peoples, setPeoples] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filters, setFilters] = useState([]);

  const getFilters = () => {
    let filters = data.map((list) => ({
      id: list.name,
      name: list.name,
      checked: false,
    }));
    return filters;
  };

  useEffect(() => {
    setPeoples(filteredPeoples());
  }, [search, filtered]);

  useEffect(() => {
    setFilters(getFilters());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const filteredPeoples = () => {
    const peoplesList = data.reduce(
      (acc1, currVal1) =>
        acc1.concat(
          currVal1.people.reduce((acc2, currVal2) => {
            acc2.push(currVal2);
            return acc2;
          }, [])
        ),
      []
    );

    if (filtered) {
      return peoplesList.filter((people) =>
        people.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    console.log(peoplesList);
    return peoplesList;
  };

  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "white",
      overflow: "hidden",
    },
    grid: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 315px)",
      gridTemplateRows: "repeat(auto-fill, 220px)",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "10px",
      gap: "10px",
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <Navbar
        setFiltered={setFiltered}
        setSearch={setSearch}
        isMobile={isMobile}
        setFilters={setFilters}
        search={search}
      />

      <FilterBar
        setFiltered={setFiltered}
        setSearch={setSearch}
        isMobile={isMobile}
        filters={filters}
        setFilters={setFilters}
        data={data}
        setPeoples={setPeoples}
      />

      <div style={style.container} onResize={() => console.log("resize")}>
        {peoples.length > 0 && (
          <div style={style.grid}>
            {peoples.map((singleData, index) => (
              <Card key={index} cardData={singleData} isMobile={isMobile} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
