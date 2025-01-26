import React from "react";
import Form from "./Form";
var IsRegistered = false;
function App() {
  return (
    <div className="container">
      <Form userIsRegistered={IsRegistered} />
    </div>
  );
}

export default App;
