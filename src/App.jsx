import React, { Fragment, useState } from 'react'

const App = () => {

  const [UserData, setUserData] = useState(
    {
      Name: "",
      RollNo: ""
    }
  )
  const fields = [
    {
      name: "Name",
      placeholder: "Enter Name",
      type: "text"
    }, {
      name: "RollNo",
      placeholder: "Enter Rollno",
      type: "number"
    }
  ]

  const Handle = (e) => {
    const { name, value } = e.target

    setUserData({
      ...UserData,
      [name]: value
    })
  }

  const Submit = async () => {
    const Response = await fetch("", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: UserData
    })

    const result = Response.json()

    console.log(result)
  }

  return (
    <div>
      {
        fields.map((val, index) =>
          <Fragment key={index}>
            <input type={val.type} name={val.name} placeholder={val.placeholder} onChange={Handle} />
            <br />
          </Fragment>
        )
      }
      <button onClick={Submit}>Submit</button>
    </div>
  )
}

export default App
