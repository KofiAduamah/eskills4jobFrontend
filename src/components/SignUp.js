import React, {useState} from 'react';
import "./SignUp.css";
import  axios from 'axios';

const SignUp = () => {
const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    user_role: ''
});

const handleChange = (event) => {
setFormData({ ...formData, 
[event.target.name]: event.target.value
});
};

const validate = () => {
    if(!formData.name.trim()){
    alert("Full Name Required");
    return false;
}else if(!formData.email.trim()){
    alert("Email Address Required");
    return false;
}else if(!formData.password.trim()){
    alert("Password Required");
    return false;
}else if(!formData.user_role.trim()){
    alert("User Role Required");
    return false;
}else{
    return true;
}

};

const push = async (e) => {
e.preventDefault();

try{

    // console.log("validate status: ", validate());
    if (validate()){
        console.log("fields validated and returned successful.");
        console.log("formData: ", formData);
const response = await axios.post('http://localhost:3002/users/register', formData,
    // {
    //     withCredentials: true, // Include this if the backend requires credentials
    //   }
);
console.log("Response from server: ", response.data);    
alert(response.data.message);
}
}catch(ee){
console.log("error creating/registering new user: ",ee);
} 

};

return (
    <form onSubmit={push}>
        <h2>Sign Up</h2>
        <label for ="text">Full Name</label>
        <input type="text" name="name"    onChange={handleChange} placeholder='Enter Full Name'  />
        <br/>

    <label for ="email">Email</label>
    <input  type="email" name="email"  onChange={handleChange} placeholder='Enter Email Address'  />
    <br/>

    <label for ="password">Password</label>
    <input  type="password" name="password"  onChange={handleChange} placeholder='Enter Password'   />
    <br/>

    <select  name="user_role"  onChange={handleChange}>
    <option value="">Select Role</option>
    <option value="Student">Student</option>
    <option value="Administrator">Administrator</option>
    <option value="Instructor">Instructor</option>
   </select>
    <br/>
    
    <button type="submit">Sign Up</button>
    <p>Already have an account? <a href="http://localhost:3000/login" >Login</a></p>
    </form>
);

};

export default SignUp;
