import { useState,useEffect } from "react";
import {restroList} from "../Constant";
import RestrauntCard from "./RestrauntCard";
import ShimmerUI from "./ShimmerUI";

function filterData(searchText,restaurants){
    const filterData=restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;

}


const Body= () =>{ 

    // Avoid Rendering Component
    const[allRestaurants,setAllRestaurants]= useState([]);
    const [filteredRestauraunts,setFilteredRestaurants]=useState([]);
    const[searchText, setSearchText]=useState("");
    

    useEffect(()=>{
        // API Call with Empty Array
        getRestaurants();
    },[]);
    /*
    * useEffect is a Hook.(Need to import using named import from React.)
    * We call this useEffect giving two parameters 1.call Back function ()=> 2.  dependency array [],
    * Dependency array decide that when our call back function is called.
    * Suppose we pass [searchText] now this call back function is called only when my searchText is changed.[once after intial render + every time after rerneder(searctext change)]
    * [] it means it is not depend on anything then it will be called only once and after intial render.

    
    */
   async function getRestaurants(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.4726817&lng=77.7085091&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json()
    console.log(json);
    // let use that api data
   setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); // this is a bad way to do that we have to use optional chaining
    //? optional chaining.
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   }
   console.log("render");
   // Conditional rendering
   // if restraunt is empty => shimmer ui
   // if restraunt has data => actual data ui

   if(!allRestaurants) return null;  // this is known aws early return //  When i dont have all restraunts  dont render anything.
   if(filteredRestauraunts?.length===0) return <h1>NO Restraunt Match your Filter!!</h1>
    return allRestaurants?.length===0 ?(<ShimmerUI/>) : (
    <>

        <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText}
        onChange={(e)=>{
           
            setSearchText(e.target.value);
        }

        }
        ></input>
        <button className="search-button"
        onClick={()=>{
          
         const data=   filterData(searchText,allRestaurants);
         setFilteredRestaurants(data);
            }}
         >Search</button>
    </div>
       
        <div className="restraunt-list">
        {/** you have to write logic for no restraunts found.  */}
            {filteredRestauraunts.map((restaurant) =>{
                return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
            }
            )}
            </div>
    </>
           
    )
    

};
export default Body;