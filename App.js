  
import React from "react";
import ReactDOM from "react-dom/client"
/*
*Header
* -logo
* -Nav Items
*Body 
* - search
* - RestaurantContainer
* - RestaurantCard
*   - Img
*   - Name of res, star rating, cuisine, delivery time
*Footer
* - CopyRight
* - Links
* - Address
* - Contact
*/

const Header = ()=>{
  return(
    <div className= "header">
      <div className = "logo-container">
      <img className = "logo" 
      src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>

    </div>
  )
}

const styleCard ={
  backgroundColor: "#f0f0f0"
}

const RestaurantCard = () =>{
  return(
    <div className="res-card" style ={{backgroundColor: "#f0f0f0"}}>
  <img 
  className="res-logo"
  alt = "res-logo"
  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/12/29/57bebf52-5a58-42e0-af9d-3d872d52de83_2d89d14b-3568-4be1-946d-1d7b0539edae.jpg"
  />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4> 4.4 stars</h4>
      <h4> 38 minutes</h4>
    </div>
  );
};

const Body = ()=>{
  return(
    <div className= "body">
      <div className = "search">Search</div>
      <div className = "res-container">
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/><RestaurantCard/><RestaurantCard/>
           
      </div>
    </div>
  )
}

const AppLayout = ()=>{

  return( 
   
    <div className ="app">
       <Header/>
       <Body/>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)
