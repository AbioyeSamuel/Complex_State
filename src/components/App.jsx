import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function firstNameInput(event) {
    setFirstName(event.target.value);
  }
  function lastNameInput(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          onChange={firstNameInput}
          name="fName"
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={lastNameInput}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
