import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      "https://airbnb-full-stack-experiences.herokuapp.com/data"
    );
    const jsonData = await response.json();
    setData(jsonData.data);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="cardContainer">
        {data &&
          data.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
      </div>
    </>
  );
};

export default App;
