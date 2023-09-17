import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

// Functional Component
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// JSX => React.createElement => Object => HTML(DOM)
const heading1 = (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

// React Components:- 1. Functional Component (latest), 2. Class Based Component (old)

//Functional Component
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
//async defer
root.render(<HeaderComponent />);