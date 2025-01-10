import React from "react";
import GeneratePDF from "./GeneratePDF"; // Adjust the path based on where you saved the file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
      </header>
      <main>
        {/* Call the GeneratePDFWithLogo component here */}
        <GeneratePDF/>
      </main>
    </div>
  );
}

export default App;
