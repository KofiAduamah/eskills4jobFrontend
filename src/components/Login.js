import React, {useState} from 'react';
import "./SignUp.css";
import  axios from 'axios';

const Login = () => {
const [formData, setFormData] = useState({
    email:'',
    password:'',
});

const handleChange = (event) => {
setFormData({ ...formData, 
[event.target.name]: event.target.value
});
};

const validate = () => {
     if(!formData.email.trim()){
    alert("Email Address Required");
    return false;
}else if(!formData.password.trim()){
    alert("Password Required");
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
const response = await axios.post('http://localhost:3002/auth/login', formData,
//     {headers: {
//     'Content-Type': 'application/x-www-form-urlencode',
//     },
// },
    {
        withCredentials: true, // Include this if the backend requires credentials
      }
);
console.log("Response from server: ", response.data);    
alert(response.data.message);
}
}catch(ee){
console.log("error in logging in: ",ee);
} 

};


return (
    <form onSubmit={push}>
        <h2>Login</h2>
    <label for ="email">Email</label>
    <input  type="email" name="email"  onChange={handleChange} placeholder='Enter Email Address'  />
    <br/>

    <label for ="password">Password</label>
    <input  type="password" name="password"  onChange={handleChange} placeholder='Enter Password'   />
    <div className="remember-forgot">         
    <label><input type='checkbox'/>Remember me </label><a href="#">Forgot Password?</a>
    </div> <br/>
    <button type="submit">Login</button>
    <p>Don't have an account? <a href="http://localhost:3000/">Sign Up</a></p>
    </form>
);
};

export default Login;
