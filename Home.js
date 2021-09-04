import React from "react";
import "./Home.css";
import Product from "./Product";

function Home () {
   return(
   <div className="home">
     <img
     className="home__image"
     src="https://wallpaperstock.net/wallpapers/thumbs1/43896wide.jpg"
     alt=""
     />
    <div className = "home__row">
     <Product
       id = "103687"
       title = "Stylish Kula Backpack, Support the environment and look great at the same time"
       price = {27.35}
       rating = {4}
       image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIdlYMDQ0jS4BNiE-qeD8sPp35tqAzOjuznWBcGJfhoYCICIqckcMNSjBM3aWHdyb1BREL5cI&usqp=CAc"
     />

     <Product
       id = "103688"
       title = "Environmentally friendly dog food, pedigree chicken and lamb dog food, reccomended, SHIPPING INCLUDED"
       price = {7.00}
       rating = {5}
       image = "https://citydogexpert.com/wp-content/uploads/2019/03/yora-packshot-800.png"
     />
    </div>

    <div className = "home__row">
    
     <Product
       id = "103689"
       title = "2L of RHS Eco Friendly Weed Killer"
       price = {15}
       rating = {4}
       image = "https://www.quickcrop.ie/site/uploads/sys_products/mobile/rhs-weedkiller-01.jpg"
     />
     
     <Product
       id = "203687"
       title = "FREE Environmentally Friendly bags x5"
       price = {0}
       rating = {5}
       image = "https://www.treehugger.com/thmb/4n0-qlGgqHVy5G7CH670oMhB7wY=/1478x831/smart/filters:no_upscale()/BeeGreenReusableGroceryBag10-Pack-076ca14259be48338660acceabfc9bad.jpg"
     />
     
     <Product
       id = "103687"
       title = "x2 Re-usuable Water Bottle, Red and Blue"
       price = {35}
       rating = {4}
       image = "https://www.ecofriendlyhabits.com/wp-content/uploads/2019/08/eco-friendly-water-bottles.jpg"
     />


    </div>

    <div className = "home__row">
    <Product
       id = "303687"
       title = "New Smart EQ Fortwo"
       price = {20000}
       rating = {4}
       image = "https://www.electrive.com/wp-content/uploads/2019/09/smart-eq-fortwo-mj-2020-02-min.png"
     />
    </div>


   </div>
     


     );

}

export default Home;