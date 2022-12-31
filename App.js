const heading1= React.createElement("h1",{id:"title"},"Heading1");  //This come from react core library.
const heading2= React.createElement("h1",{id:"title2"},"Heading2");
const container=React.createElement(
    "div",
{
    id:"container"
},
[heading1,heading2]
)
    const root=ReactDOM.createRoot(document.getElementById("root"));  //This come from Second Lib ReactDOM.


    // Passing a react element inside root or Heading inside root
    
    root.render(container);
  //  root.render(heading1); this overwrite container one.
 
