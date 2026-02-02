  
import React from "react";
import ReactDOM from "react-dom/client"

//React.createElemnt => javascript object=> when we Render this to DOM => Html Element
const heading = React.createElement("h1",{id:"heading"},"Namaste React🚀");
console.log(heading);

//JSX => is not HTML =>it is HTML or xml like Syntax
//JSX (transpiled before it reaches the JS Engine)-PARCEL-Babel
//JSX => Babel Transpile it to React.createElement => ReactElement => JS Object =>Html Element(render)
const jsxHeading = <h1 className="heading">Namste React Using JSX 🚀</h1>;

const jsxHeadingMultiLine = (<h1 id="heading">
  New Namste React Using JSX 🚀
  </h1>);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxHeading);
root.render(jsxHeadingMultiLine);


