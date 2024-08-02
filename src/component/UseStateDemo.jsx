import React, { useState } from 'react'

export const UseStateDemo = () => {
const submitForm = ()=>{
    console.log(`FirstName:: ${firstName} \nLastName:: ${lastName} \nemail:: ${email} \nUserName:: ${userName} \nPassWord:: ${password}`)
}
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")
const [email, setemail] = useState("")
const [userName, setuserName] = useState("")
const [password, setpassword] = useState("")
  return (
    <div>
      <form>
        <div>
            <lable>FirstName:</lable>
            <input type='text' onChange={(event) =>{setfirstName(event.target.value)}}/>
        </div>
        <div>
            <lable>LastName:</lable>
            <input type='text' onChange={(event) =>{setlastName(event.target.value)}}/>
        </div>
        <div>
            <lable>Email:</lable>
            <input type='text' onChange={(event)=>{setemail(event.target.value)}}/>
        </div>
        <div>
            <lable>UserName:</lable>
            <input type='text' onChange={(event)=>{setuserName(event.target.value)}}/>
        </div>
        <div>
            <lable>Password:</lable>
            <input type='text' onChange={(event)=>{setpassword(event.target.value)}}/>
        </div>
        <div>
            <input type='button' value="submit" onClick={()=>{submitForm()}}/>
        </div>
      </form>
    </div>
  )
}

export default UseStateDemo
