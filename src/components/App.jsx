import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

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
