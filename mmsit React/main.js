import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement("h1",null,"Hello React"); //react node

const App = () => {

const courses = [
  {
    id:1,
    title:"Web dev foundation",
    studentCount : 5,
  },
  {
    id:2,
    title:"Web Design",
    studentCount:7,
  },
  {
    id:3,
    title:"Web backend",
    studentCount:0,
  },
  {
    id:4,
    title:"Web app",
    studentCount:5,
  },
]

  return React.createElement(
    "div",
    {className:"p-10 border border-gray-500"},
    React.createElement("h1",
     {className: "font-serif font-bold text-blue-500 text-3xl mb-5"},
     "Course List"),
    React.createElement(
      "ul",
      null,
      courses.map(({title,id}) => React.createElement("li",{key: id, className: "font-mono bg-gray-100 mb-3 p-2 border-s-4"},
       title)),
      ) 
  ); 
};

root.render(App());
