/* Bundlers Super Power's
*   TreeShaking- Removing Unwanted code.
*
* 
*/
import React from "react";
import ReactDOM from "react-dom/client";
// const heading1= React.createElement("h1",{id:"title",key:"1"},"Heading1");  
// const heading2= React.createElement("h1",{id:"title2",key:"2"},"Heading2 Ok");

// {/* <div class="Header">
// <h1>Namsate React</h1>
// <ul>
//     <li>About</li>
//     <li>Home</li>
//     <li>Support</li>
// </ul>
// </div> */}
// const container=React.createElement(
//     "div",
// {
//     id:"container",
//     hello:"world"  
// },[[heading1,heading2]]

// [React.createElement("h1",
// {id:"title",key:"1"},
// "Heading1"),

// React.createElement("ul",{},
// [React.createElement("li",{},"About Us"),
// React.createElement("li",{},"Home"),
// React.createElement("li",{},"Support"),
// ]) ]


// Using this will be huge mess and we wont be able to do anything.
// so thats why we use JSX.
// );



// JSX (Java Script xml-- NOt official)
// jSX ==> React.createElement ==> Object ==>HTML(DOM)
const heading=<h1 id="title1" key="h2">Namaste React(Using React elemnet inside functional componennt.)</h1>;  //this is known as react element.
 //if writing in multiple line have to put paranthesis.
//this is known as jsx expression.



// ReactComponent -
// 1. Functional Component (New way of code)
//2. Class Based Component(Old way of code)

//Functional component is nothung but a java scriopt function that return a piece of jsx code,a react element etc.(Normal function)
//Name of any component stat with Capital letter.(good practice)
 const Title= () =>{
     // return <h1>Namaste react functional Component</h1>; semicolun is mandatory in one line,if more then one line need pranthesis.
     // {heading} using react elemnt inside react component.
     return (
      
        <div>
          
            <h1>
            Here we are using functional component inside functional Component
            </h1>
            
        </div>
     )
     
 };
 const Title2= function() {
    // return <h1>Namaste react functional Component</h1>; semicolun is mandatory in one line,if more then one line need pranthesis.
    return (
       <div>
           <h2>
          Another way to use functional component inside functioal component.
           </h2>
           
       </div>
    )
    
};

 const HeaderComponent1= () =>
    // return <h1>Namaste react functional Component</h1>; semicolun is mandatory in one line,if more then one line need pranthesis.
    // Both these componet have same code we can write compnet without return too this i arrow function thing.
    // we can also writemormal function instead of arrow function.
     // {heading} using react elemnt inside react component.
     // <Title/> or {Title()} ways to using f.component inside f.component.  => This is known as Component Composition or Compososing Component. 
     (
       <div>
       {heading}
       <Title/>
       {Title2()}
           <h1>
           Namaste react functional Component
           </h1>
           <h2>
               This is a h2 tag.
           </h2>
       </div>
    )
    

const root=ReactDOM.createRoot(document.getElementById("root"));  


    
   // root.render(heading); when i want to render my react element i do like this.
   root.render(<HeaderComponent1/>) //now when i want to render my functional component i have to do like this.
  
 
