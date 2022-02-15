import React from "react";

//import countries from "./countries";

export default function App() {
const [id] = React.useState("");
  
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  
  const [answerOne, setanswerOne] = React.useState("");
  const [answerTwo, setanswerTwo] = React.useState("");
  const [answerThree, setanswerThree] = React.useState("");
  const [answerFour, setanswerFour] = React.useState("");
  const [answerFive, setanswerFive] = React.useState("");

  //const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
    {
      id: ${Number(id)}
      firstName: ${firstName}
      lastName: ${lastName}
      answerOne: ${answerOne}
      answerTwo: ${answerTwo}
      answerThree: ${answerThree}
      answerFour: ${answerFour}
      answerFive: ${answerFive}
      Accepted Terms: ${acceptedTerms}
    }
    `);

    fetch('http://localhost:3000/data/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: "",
        firstName: firstName,
        lastName: lastName,
        answerOne: answerOne,
        answerTwo: answerTwo,
        answerThree: answerThree,
        answerFour: answerFour,
        answerFive: answerFive,
      })
    })
    
    event.preventDefault();
  }

//   fetch('https://localhost:3000/data/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: "",
//     firstName: firstName,
//     lastName: lastName,
//     answerOne: answerOne,
//     answerTwo: answerTwo,
//     answerThree: answerThree,
//     answerFour: answerFour,
//     answerFive: answerFive,
//     acceptedTerms: acceptedTerms
//   })
// })
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>REMOTE WORKING QUESTIONAIRE</h1>
      <p align="center">Small Questionaire based around the topic Remote Working. All the data collected will not be public but will aid my personal research. <b>Protected under GDPR</b></p>

      <label>
        First Name:
        <input
          name="firstName"
          type="firstName"
          value={firstName}
          onChange={e => setfirstName(e.target.value)}
          required />
      </label>
      
      <label>
        Last Name:
        <input
          name="lastName"
          type="lastName"
          value={lastName}
          onChange={e => setlastName(e.target.value)}
          required />
      </label>

  <br></br>
  <br></br>
  <br></br>

      <label>
        Do you think Remote Working will become the new way to work in our modern world?
        <input
          name="answerOne"
          type="answerOne"
          value={answerOne}
          onChange={e => setanswerOne(e.target.value)}
          required />
      </label>

      <label>
        How would you react to a world where remote working was normal?
        <input
          name="answerTwo"
          type="answerTwo"
          value={answerTwo}
          onChange={e => setanswerTwo(e.target.value)}
          required />
      </label>

      <label>
        Can you adapt to work in Remote Working conditions?
        <input
          name="answerThree"
          type="answerThree"
          value={answerThree}
          onChange={e => setanswerThree(e.target.value)}
          required />
      </label>

      <label>
        Could your job make use of Remote Working?
        <input
          name="answerFour"
          type="answerFour"
          value={answerFour}
          onChange={e => setanswerFour(e.target.value)}
          required />
          <label>If Yes, How? <b>Explain Below</b></label>
                  <input
          name="answerFive"
          type="answerFive"
          value={answerFive}
          onChange={e => setanswerFive(e.target.value)}
          required />
      </label>

      {/* <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label> */}

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
I Agree To Terms And Conditions.                
      </label>

      <button>Submit</button>
    </form>
  );
}
