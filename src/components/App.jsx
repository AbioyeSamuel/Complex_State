import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });
  function handleChanged(event) {
    //use events in this form because the event listeners access asynthetic event
    const [value, name] = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lastName };
      } else if (name === "lName") {
        return { fName: prevValue.firstName, lName: value };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={handleChanged}
          name="fName"
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          onChange={handleChanged}
          name="lName"
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
