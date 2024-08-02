import React from 'react'
import {  useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const navigate = useNavigate();
    const handleData = ()=>{
        let firstName = document.getElementById('input1').value;
        let LastName = document.getElementById('input2').value;
        alert(`FirstName :: ${firstName} \nLastName:: ${LastName}`);
        navigate("/login")
    }
    return (
        <div>
            <form>
                <div>
                    <lable>UserName</lable>
                    <input type='text' id="input1"/>
                </div>
                <div>
                    <lable>Password</lable>
                    <input type='text' id="input2"/>
                </div>
                <div>
                    <button type="button" onClick={()=>{handleData()}}>Submit</button>
                </div>
            </form> 
        </div>
    )
}

export default SignUp
