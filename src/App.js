import React from "react";
import useCustomHook from "./useCustomHook";

function App() {
  console.log("print")

  const update1 = useCustomHook(0,'button1')
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
