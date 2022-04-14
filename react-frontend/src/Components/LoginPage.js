import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ChargingstationService from '../Services/ChargingstationService';
import LoginService from '../Services/LoginService';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    // const {firstName} = useParams();
    const navigate = useNavigate();

    const login=(e) =>{
        e.preventDefault();

        const user = {email,password};
        LoginService.authenticateUser(user).then((response) =>{
            // console.log(response.data);
            // console.log(response.data.roleId);
            
            localStorage.setItem("user",JSON.stringify(user));
            if(response.data.roleId === 1)
            {
                navigate('/adminpage');
            }
            else if(response.data.roleId === 3)
            {
                ChargingstationService.getChargingstationByMail(response.data.email).then((station)=>{

                    navigate(`/chargingstationpage/${station.data.stationId}`);
                })
                
            }
            else if(response.data.roleId === 2)
            {
                LoginService.getUserName(response.data.email).then((user) =>{
            
                    // setName(user.data.firstName);
                    // console.log(user.data.firstName);
                    // console.log(user.data);
                    
                    
                    navigate(`/customerpage/${user.data.customerId}`);
                })
                
            }
        })
    };

  return (
      <div className='form-group col-6' style={{marginLeft:'300px'}}>
    <form><br/>
    <h3 style={{textAlign:'center'}}>Sign In</h3><br/>
    <div className="form-group">
        <label><b>Email address</b></label>
        <input type="email" className="form-control" placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
    </div><br/>
    <div className="form-group">
        <label><b>Password</b></label>
        <input type="password" className="form-control" placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
    </div><br/>
    <div className="form-group">
        {/* <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div> */}
    </div>
    <button type="submit" className="btn btn-primary btn-block" style={{marginLeft:'250px'}} onClick={(e) => login(e)}>Log In</button>
</form><br/>
<p class="text-center">SignUp As:<a href="/add-customer">Customer :</a><a href="/add-chargingstation">Chargingstation </a></p> 
</div>
  )
}

export default LoginPage