import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });
  function handleChanged(event) {
    const newValue = event.target.value;
    setFullName(newValue);
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
