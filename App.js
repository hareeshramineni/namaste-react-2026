  
import React from "react";
import ReactDOM from "react-dom/client"


const Title = ()=>(
  <h1 className="head" tabIndex="5">
    React Using JSX 🚀
    </h1>
)

const HeadingComponent = ()=>{
  return(
    <div id="container">
    {/* component Composistion */}
      <Title/>
<h1 className="header">Namste React Functional Component</h1>
</div>
)};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);




