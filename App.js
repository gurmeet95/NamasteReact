/* Parcel Powers =>
 * Created a Server.
 * HMR - HOt Module Replacement ==Change show directly after refreshing. (USing FileWatcher Algo.)
 *  File watcher Algorithm(C++).
 * .parcel-cache is space for Parcel.
 * Bundling
 * Minify
 * cleaning our code.
 * Dev and Production Build.
 * Super Fast Build algorithms.
 * Image Optimization.
 * Caching while Development.
 * Compression.
 * Compatible with older version of Browser.
 * Https on development. (npx parcel index.html -https)
 * consistent Hashing Algorithms.
 * Zero Config Bundler
 * 
 *   
 * 
 * Transitive dependecies(Will help React to make faster, bundlers,minifying,Image optimization,other packages)
*/
import React from "react";
import ReactDOM from "react-dom/client";
const heading1= React.createElement("h1",{id:"title"},"Heading1");  //This come from react core library.
const heading2= React.createElement("h1",{id:"title2"},"Heading2");
const container=React.createElement(
    "div",
{
    id:"container",
    hello:"world"  //This is props(Properties)
},
[heading1,heading2]
)
    const root=ReactDOM.createRoot(document.getElementById("root"));  //This come from Second Lib ReactDOM.


    // Passing a react element inside root or Heading inside root
    
    root.render(container);
  //  root.render(heading1); this overwrite container one.
 
