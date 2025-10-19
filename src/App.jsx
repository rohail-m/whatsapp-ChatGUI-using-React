import React from "react";
import "./globals.css";
import ChatGUI from "./ChatGUI";

const App = () => {
  return (
    <>
      <div className="w-1/2 p-10 mt-10 rounded-md mx-auto shadow-2xl shadow-black-500 bg-gray-500">
        <ChatGUI />
      </div>
    </>
  );
};

export default App;
