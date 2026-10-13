import { BrowserRouter } from "react-router-dom";
import MainComponent from "./MainComponent.jsx";
import "./App.css";

export default function App() {
  return (
    <>
     
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
    </>
  );
}