import InputInformation from "./components/InputInformation"
import DisplayInformation from "./components/DisplayInformation"
import { useState } from "react"

function App() {
  const [fullName, setFullName] = useState(
    {
      prev: "",
      current: "",
    }
  );
  const [email, setEmail] = useState(
    {
      prev: "",
      current: "",
    }
  );
  const [submit, setSubmit] = useState(false);

  const handleNameChange = (evt) => {
    setFullName(
      {
        ...fullName, current: evt.target.value,
      }
    )
    // setFullName(evt.target.value);
  }

  const handleEmailChange = (evt) => {
    setEmail(
      {
        ...email, current: evt.target.value,
      }
    )
    // setEmail(evt.target.value);
  }

  const handleSubmit = (evt) => {
    setSubmit(true);
    setFullName(
      {
        ...fullName, prev: fullName.current, current: '',
      }
    )
    setEmail(
      {
        ...email, prev: email.current, current: '',
      }
    )
  }

  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/2 grow">
        <InputInformation fullName={fullName} emailAddress={email} onNameChange={handleNameChange} onEmailChange={handleEmailChange} handleSubmit={handleSubmit} />
      </div>
      <div className="basis-1/2 grow">
        <DisplayInformation fullName={fullName} emailAddress={email} submit={submit} />
      </div>
    </div>
  )
}

export default App
