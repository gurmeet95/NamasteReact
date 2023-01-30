
import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./component/Header";
import Body from "./component/Body"; 
import Footer from "./component/Footer";



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
  
 
