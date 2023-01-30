import { useState } from "react";
const loggedinUser=()=>{
  // Api call to chech authentication..
  // Let it have true as of now.
  return true;
}
const Title=() =>(
    <a href="/">
      <img 
       className="logo"
       alt="logo"
       src="https://img.wongnai.com/p/1920x0/2020/04/12/9b8d85e2be69482f936cff161675197f.jpg"/>
     </a>
     );
     const Header= () =>{

      const[isLoggedIn,setIsLoggedIn]=useState(false);
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
            {
              // Any Js Expressions not Statement
              /* a=10;
              console.log(a) */// wont because it is staement
              /* ((a=10),console.log(a)) */ // work because it is expression

              isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button>:
               <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
             
         </div>
      )
      
  };
      
    

    export default Header; 

     