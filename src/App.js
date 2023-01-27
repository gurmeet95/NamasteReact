
import React from "react";
import ReactDOM from "react-dom/client";

//Default import
import Header from "./component/Header"; //(or /Header.js)(we can also give name Header.jsx instead of Header.js to file.)
import Body from "./component/Body"; 
import Footer from "./component/Footer";
// Named import
//import {Title} from "./component/Header"
// import Header,{Title} from "./component/Header.js";  // another way to import in one line.
 // import * as XYZ from "./component/Header";   (<XYZ.Header>, <XYZ.Title()> )
/**
             * Header 
             *    -Logo
             *    -ListsItems
             *    - Cart
             * Body 
             *   - Search Bar
             *   -Restraunlist
             *      -RestaurantCard
             *         - Image
             *         - Name
             *         - Rating
             *         - Cusines
             * 
             * Footer
             *   -Links
             *   -Copyright
             */

const AppLayout=() =>{
    return(
        <React.Fragment>  
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
        
    )

   
}

const root=ReactDOM.createRoot(document.getElementById("root"));  


    
   root.render(<AppLayout/>);
  
 
