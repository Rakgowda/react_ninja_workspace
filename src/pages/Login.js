import React,{useState,useRef} from 'react';
import Paper from '@material-ui/core/Paper';
import LoginStyle from "../css/login.css"
import GlobalStyle from "../css/global.css"
import { Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
const Login = () => {
    const [isPasswordHide, setisPasswordHide] = useState(true);
    const [isButtonDisabled, setisButtonDisabled] = useState(true);
    const [errorMessage, seterrorMessage] = useState("")

    const email = useRef("");
    const password = useRef("");
    const history = useHistory();

    function onPasswordShowClick(){
       if(isPasswordHide)
       {
        password.current.type="text";
        setisPasswordHide(false)
       }
       else{
        password.current.type="password";
        setisPasswordHide(true)
       }
        
        
    }
    function onChangeInput(){

        if(errorMessage!="")
        {
            seterrorMessage("");
        }
        if(password.current.value != "" && email.current.value !="")
        {
            setisButtonDisabled(false);
        }
        else if(!isButtonDisabled)
        {
            setisButtonDisabled(true);
        }
    }

    function onSubmit(){
        let loginDetail = {email:"",password:""}
        loginDetail.email = email.current.value;
        loginDetail.password = password.current.value;
        // console.log(loginDetail)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginDetail)
            };
        fetch('https://reqres.in/api/login', requestOptions)
                .then(async response => {
                    const isJson = response.headers.get('content-type')?.includes('application/json');
                    const data = isJson && await response.json();
                    if (!response.ok) {
                        debugger
                        // get error message from body or default to response status
                        const error = (data && data.error) || response.status;
                        return Promise.reject(error);
                    }
        
                    history.push("/userlist");
                })
                .catch(error => {
                    console.error('There was an error!', error);
                    seterrorMessage(error)
                });
        
    }
    return ( 
    
    <div className="loginBackground flex justifyAlignCenter">
        
        <Paper className="loginPaper"> 
       
        <Typography align="center" className="mt-4">
            <span className="primary p-3">LOGO</span>
        </Typography>

        <Typography align="center" className="mt-5 mb-4 signText">
            <span className="secondaryText">sign in using email</span>
        </Typography>
        <form action="" >
        <div className="form-group">
            <label for="email address" className="secondaryLabel">Email address</label>
            <input type = "text"
            id = "inputID"
            ref={email}
            className = "form-control SecondaryborderColor"
            id = "emailaddress"
            placeholder = "eg, abc@salestable.com"
            name = "email"
            onChange={onChangeInput}
            required />
        </div>
        <div className="form-group" style={{position:"relative"}}>
            <label for="enter password" className="secondaryLabel">Enter Password</label>
            <input type = "password"
            className = "form-control SecondaryborderColor"
            id = "password"
            ref={password}
            placeholder = "*********"
            name = "password"
            onChange={onChangeInput}
            required />
            {isPasswordHide?(<i className="bi bi-eye-slash eyeColor passwordEye" onClick={onPasswordShowClick}> </i>)
            :(<i class="bi bi-eye eyeColor passwordEye" onClick={onPasswordShowClick}></i>)}
            
            
        </div>

        <button type = "button"
        class = "btn btn-primary btn-block signInbutton" 
        disabled={isButtonDisabled}
        onClick={onSubmit}
        > 
        Sign in 
        </button>

        <p className="error text-center pt-2">{errorMessage}</p>
    
        </form>
      
        </Paper>
    </div> 
    
    );
}

export default Login;