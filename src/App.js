import React from "react";

//data
import data from "./data";

// Comp
import Card from "./comp/card";

function App() {
  const [tourData, setTourData] = React.useState(data);
  const CardList = tourData.map((item) => (
    <Card {...item} onClickHandler={notInterestedButton} />
  ));

  function notInterestedButton(id) {
    const newTourData = tourData.filter((item) => item.id !== id);
    setTourData(newTourData);
  }
  
  return (
    <div className="app">
      <h1 className="app--header">Our Tours</h1>
      {CardList}
    </div>
  );
}

export default App;
