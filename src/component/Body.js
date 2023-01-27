import { useState } from "react";
import {restroList} from "../Constant";
import RestrauntCard from "./RestrauntCard";

// What is state?
// What is React hooks ? - functions
// what is useState ?

function filterData(searchText,restaurants){
    const filterData=restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
    return filterData;

}


const Body= () =>{
   // const searchText="KFC";  THis way it not work.
        // searchtext is a local state  variable
       const[searchText, setSearchText]=useState("");   // To create state vairable 
       // const[searchText, setSearchText]=useState("KFC"); == const searchvar=useState(); const[searchText, setSearchText]
     //  ("KFC")  giving default value
       //usestate() retrun an array first itme as the vairable name and second as function to update the vairable
       // setSearchText  to set update value

    const [restauraunts,setRestaurants]=useState(restroList);

    return (
    <>

        <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText}
        onChange={(e)=>{
            // e.tatget.value= whatever u write in input
            setSearchText(e.target.value);
        }

        }
        ></input>
        <button className="search-button"
        onClick={()=>{
            // need to filter data.
         const data=   filterData(searchText,restauraunts);
         //here my searctext should filter in restaurant.
            //update the state - restaurants
            setRestaurants(data);
            

        }}
        
        >Search</button>

        </div>
       
        <div className="restraunt-list">
            {restauraunts.map((restaurant) =>{
                return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
            }
            )}
            </div>
    </>
           
    )
    /* <input type="text" className="search-input" placeholder="Search" value=""></input> 
    * in this way we only get search bar but wont able to edit it or type vlaue because
    * REACT USES ONE WAY DATA BINDING
    
    
    */

};
export default Body;