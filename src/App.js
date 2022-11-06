import React from "react";

//data
import data from "./data";

// Comp
import Card from "./comp/card";

function App() {
  const CardList = data.map((item) => <Card {...item} />);
  return (
    <div className="app">
      <h1 className="app--header">Our Tours</h1>
      {CardList}
    </div>
  );
}

export default App;
