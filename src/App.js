import React from "react";
import "./style.css";
import obj from "./Object.js"

export default function App() {
  console.log(obj)
  const objEntries = Object.entries(obj)
  return (
    <div>
  {
    objEntries.map((ele)=>{
      return(
        <div>
          <h1>{ele[0]}</h1>
          <h4>{ele[1]}</h4>
          </div>
      )
    })
  }
    </div>
  );
}
