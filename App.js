  
import React from "react";
import ReactDOM from "react-dom/client"


const elem =<span>React Element</span>

const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    React Using JSX 🚀
    </h1>
)

const HeadingComponent = ()=>{
  return(
    <div id="container">
    {/* we can write any java script code inside bracets*/}
    {title}
<h1 className="header">Namste React Functional Component</h1>
</div>
)};

const titleNew = (
  <h1 className="head" tabIndex="5">
    <HeadingComponent/>
    React Using JSX 🚀
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(titleNew);




