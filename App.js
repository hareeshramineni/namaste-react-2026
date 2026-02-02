  
import React from "react";
import ReactDOM from "react-dom/client"


// React Element
const heading = (
<h1 className="heading">
  Namste React Using JSX 🚀
</h1>);

// React Component
// class Based Component - old
//Functional Coponent - new

// React Functional Component - just a normal javaScript Function => which returns some JSX

const HeadingComponent = ()=><h1 className>Namste React Functional Component</h1>;

const HeadingComponentNew = ()=>(
<h1 className="header">Namste React Functional Component</h1>
);

const HeadingComponentNewer = ()=>{
  return(
<h1 className="header">Namste React Functional Component</h1>
)};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(<HeadingComponent/>);



