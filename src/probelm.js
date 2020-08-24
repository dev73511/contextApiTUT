import React, { useState } from "react";

const GrandChild = (props) => {
  return (
    <div>
      <Child brand={props.brand} />
    </div>
  );
};

const Child = (props) => {
  return (
    <div>
      <h1>{props.brand}</h1>
    </div>
  );
};

const App = () => {
  const [brandName, setBrandName] = useState("Flipkart");
  return (
    <div>
      <h1>Hello</h1>
      <GrandChild brand={brandName} />
    </div>
  );
};

export default App;
