
import React from "react";
import ReactDOM from "react-dom/client";
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


const Title=() =>(
<a href="/">
  <img 
   className="logo"
   alt="logo"
   src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
 </a>
 )


 const Header= () =>{
     return (
      
        <div className="header">
      
          <Title/>
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
           </div>
            
        </div>
     )
     
 };
 const restrolist1={
    name:"Burger King",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/srgz9f17bjsde9jjgb4w",
    cusines:["Burger","American"],
    rating: "4.2"
    //In real world data does not come like this. But it come as lit of array objects and one of the object is burger king.
 };

 // Dynamic UI are known as Config Driven UI.(Backed and Api ae driven that config.)
 // let us try to make it.

 const restroList=[
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "140666",
        "name": "Burger King",
        "uuid": "721d6249-d9b3-4b15-8b86-8c29202e7694",
        "city": "183",
        "area": "Dwarika Puri",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "srgz9f17bjsde9jjgb4w",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
        "restaurant": "burger-king-asj-grand-plaza-mall-new_mandi",
        "city": "muzaffarnagar"
        },
        "cityState": "183",
        "address": "Burger King India,Restaurant No-1,upper ground floor,asj grand plaza mall,khasra Nos-352 and 353 ,bhopa road,muzzafarnagar,up-251001",
        "locality": "ASJ Grand Plaza Mall",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "Get every item under 129",
        "shortDescriptionList": [
        {
        "meta": "Get every item under 129",
        "discountType": "FinalPrice",
        "operationType": "RESTAURANT"
        },
        {
        "meta": "FREE DELIVERY",
        "discountType": "FREE_DELIVERY",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "Get every item under 129",
        "discountType": "FinalPrice",
        "operationType": "RESTAURANT"
        },
        {
        "meta": "FREE DELIVERY",
        "discountType": "FREE_DELIVERY",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
        {
        "meta": "",
        "discountType": "FinalPrice",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "Get every item under 129",
        "discountType": "FinalPrice",
        "operationType": "RESTAURANT"
        },
        {
        "meta": "FREE DELIVERY",
        "discountType": "FREE_DELIVERY",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {},
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
            "type": "F",
            "id": "210845",
            "name": "Indian restaurant",
            "uuid": "d446dd18-a175-4995-9b5e-c1f62afd4338",
            "city": "183",
            "area": "Jila Parisad Colony",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "lbd9wfn3sil3utmlpp6q",
            "cuisines": [
            "Beverages",
            "North Indian",
            "Snacks"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "slaString": "18 MINS",
            "lastMileTravel": 1.100000023841858,
            "slugs": {
            "restaurant": "indian-restaurant-new_mandi-new_mandi",
            "city": "muzaffarnagar"
            },
            "cityState": "183",
            "address": "Muzaffarnagar, Uttar Pradesh, India",
            "locality": "New_Mandi",
            "parentId": 106644,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
            {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "descriptionList": [
            {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
            {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "descriptionList": [
            {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
            },
            "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
            },
            "lastMileTravelString": "1.1 kms",
            "hasSurge": false,
            "sla": {
            "restaurantId": "210845",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "lastMileTravel": 1.100000023841858,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.5",
            "totalRatings": 1000,
            "new": false
            },
            "subtype": "basic"
            },
            {
            "type": "restaurant",
            "data": {
            "type": "F",
            "id": "613951",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "uuid": "4c544185-40f5-4c97-8de4-e202d73a6cc0",
            "city": "183",
            "area": "Muzaffarnagar",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "ltsqzrzmc94lnujgrfpq",
            "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 2.799999952316284,
            "slugs": {
            "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-new_mandi-new_mandi",
            "city": "muzaffarnagar"
            },
            "cityState": "183",
            "address": "SD AND ASSOCIATES: 91B, VAKEEL ROAD, NEW MANDI, Muzaffarnagar, Uttar Pradesh-251001 (HUL- IA4B043P223)",
            "locality": "New Mandi",
            "parentId": 582,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
            {
            "meta": "20% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "descriptionList": [
            {
            "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
            {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "descriptionList": [
            {
            "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
            },
            "ribbon": [
            {
            "type": "PROMOTED"
            }
            ],
            "chain": [],
            "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
            },
            "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5737854~p=13~eid=00000185-ddaa-79d7-1733-72fa00110d62",
            "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "sla": {
            "restaurantId": "613951",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "lastMileTravel": 2.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 0,
            "new": false
            },
            "subtype": "basic"
            },
            {
            "type": "restaurant",
            "data": {
            "type": "F",
            "id": "405611",
            "name": "Indian Special",
            "uuid": "5469ec87-e2f4-437c-a1b4-99338717c5ef",
            "city": "183",
            "area": "New_Mandi",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "cavdb1czxlftsyvjzhdp",
            "cuisines": [
            "Snacks",
            "Pizzas"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 0.5,
            "slugs": {
            "restaurant": "indian-special-new_mandi-new_mandi",
            "city": "muzaffarnagar"
            },
            "cityState": "183",
            "address": "20, SOUTH BHOPA ROAD, NEW MANDI MUZAFFARNAGAR, WARD NO 34, SOUTH BHOPA ROAD, SANJAY MARG , AANSHIK , NAGAR PALIKA PARISHAD, ZONE 1, MUZAFFARNAGAR",
            "locality": "South Bhopa Road",
            "parentId": 106671,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
            {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "descriptionList": [
            {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
            {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "descriptionList": [
            {
            "meta": "50% off up to ₹80 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
            }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
            },
            "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
            },
            "lastMileTravelString": "0.5 kms",
            "hasSurge": false,
            "sla": {
            "restaurantId": "405611",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 0.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.6",
            "totalRatings": 100,
            "new": false
            },
            "subtype": "basic"
            },
            {
                "type": "restaurant",
                "data": {
                "type": "F",
                "id": "228774",
                "name": "Ganpati food",
                "uuid": "319dd0a0-60a4-4756-ba73-1ef321b8ce82",
                "city": "183",
                "area": "New_Mandi",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "seeourqnewvmt9qndi0x",
                "cuisines": [
                "Chinese",
                "North Indian",
                "South Indian"
                ],
                "tags": [],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "slaString": "34 MINS",
                "lastMileTravel": 0.5,
                "slugs": {
                "restaurant": "ganpati-food-new_mandi-new_mandi",
                "city": "muzaffarnagar"
                },
                "cityState": "183",
                "address": "Bhopa road opposite grand plaza mall",
                "locality": "New_Mandi",
                "parentId": 86214,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
                }
                ],
                "descriptionList": [
                {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
                }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
                }
                ],
                "descriptionList": [
                {
                "meta": "50% off up to ₹80 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
                }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                "fees": [],
                "totalFees": 0,
                "message": "",
                "title": "",
                "amount": "",
                "icon": ""
                },
                "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
                },
                "lastMileTravelString": "0.5 kms",
                "hasSurge": false,
                "sla": {
                "restaurantId": "228774",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "lastMileTravel": 0.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.3",
                "totalRatings": 100,
                "new": false
                },
                "subtype": "basic"
                }
        
        

 ]
    
        
 
//  const RestrauntCard=(props)=>{
    
//         return(
//             <div className="card">
//                 <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId}/>
//                 <h2>{props.restaurant.data?.name}</h2>
//                  <h3>{props.restaurant.data?.cuisines.join(", ")}</h3> 
//                  <h4>{props.restaurant.data?.avgRating}*</h4>
    
//              </div>
//          )

// Best way to taking props
const RestrauntCard=({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating
})=>{
    
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
            <h2>{name}</h2>
             <h3>{cuisines.join(", ")}</h3> 
             <h4>{avgRating}*</h4>

         </div>
     )
         // const RestrauntCard=({restraunt})=>   THis is object destructuring.
         /*in destructre we can destructure it more 
            const RestrauntCard=({restraunt})=>{
                const {name,cusines,cloudimageid,avgrating} = restraunt.data(Now no need of this too);
                    <h2>{name}</h2>


            }
         */
         // props.restaurant.data    // restaurant.data in object destructuin.
         // THis is hard coded for one restro only [0], i want it to be dynamic.that all restro list show there
         // This is optional chaning if name does not exist this will come into picture.
         //This is how we can dynamically get data.
         // .join(,)   put that symbol between arrays elements.
    //     // This is static data but data will be genrally dynamic lets make it dynamic.
      };
//  const RestrauntCard=()=>{
//     return(
//         <div className="card">
//             <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/srgz9f17bjsde9jjgb4w"></img>
//             <h2>Burger King</h2>
//             <h3>Burgers, American</h3>
//             <h4>4.2 stars</h4>

//         </div>
//     )
//     // This is static data but data will be genrally dynamic lets make it dynamic.
//  }
const Body= () =>{
    return (
       
        <div className="restraunt-list">
            {restroList.map((restaurant) =>{
                return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
            }
            )}
            </div>
           
            /* // best way to passing prorps (instad of passing each restro data manually let us use map)
            no key(Not acceptable thing) < index key(use only if dont have anything) < unique key (best Practice)
            <RestrauntCard {...restroList[0].data}/>
            <RestrauntCard {...restroList[1].data}/>
            <RestrauntCard {...restroList[2].data}/>
            <RestrauntCard {...restroList[3].data}/>
            <RestrauntCard {...restroList[4].data}/>
             */
        
        // <div className="restraunt-list">
        //     <RestrauntCard restaurant={restroList[0]}/>
        //     <RestrauntCard restaurant={restroList[1]}/>
        //     <RestrauntCard restaurant={restroList[2]}/>
        //     <RestrauntCard restaurant={restroList[3]}/>
        //     <RestrauntCard restaurant={restroList[4]}/>
            
        // </div>
    )
    // whatever we are passing here(passing anything in component is known as props) is known as props- properties inside react.
}
const Footer= () =>{
    return (
        <h4>Footer</h4>
    )
}

const AppLayout=() =>{
    return(
        <React.Fragment>  
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
        // Jsx Expresions must have one parent element. So to overcome this type issue we have React.fragment
        //React.Fragment is Component which is exportd by React.
        //React.Fragemnt is like empty tag.
        // <React.Fragment></React.Fragment> ==   <></>    /Another to write ract fragment.
       
    )

   
}
// const styleobj={
//     backgroundColor: "red",
// }
// // inline styling
// const jsx=(
//     <div style={styleobj}>   or   <div style={{backgroundColor: "red",}}>  this way or className=ab and give styling in css file.
//         <h1>Jsx</h1>
//         <h1>Jsx2</h1>
//     </div>
// )

const root=ReactDOM.createRoot(document.getElementById("root"));  


    
   root.render(<AppLayout/>);
  
 
