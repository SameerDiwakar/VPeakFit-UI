import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Body/Logo/Logo";
import Carousel from "./components/Body/Carousel/Carousel";
import Paragraph from "./components/Body/Paragraph/Paragraph";
import UserInput from "./components/Body/UserInput/UserInput";
import Footer from "./components/Footer/Footer";
import Panel from "./components/Body/Panel/panel";
import Todoli from "./components/Body/Todo/todo";



function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* <Logo /> */}
        {/* <Carousel /> */}
        <div className="hero-secn flex items-center justify-center mx-5 gap-2">
        <Panel/>
        <Todoli/>
        </div>
        <Paragraph />
        {/* <UserInput /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
