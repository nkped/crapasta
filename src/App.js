import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const allSubjects = [
    "react",
    "react-bootstrap",
    "react-router",
    "react-router",
    "github",
    "github",
    "github-pages",
    "git",
  ];

  const uniqueSubjects = new Set(allSubjects);

  console.log(uniqueSubjects);

  return <div></div>;
}

export default App;
