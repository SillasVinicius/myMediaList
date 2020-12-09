import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import "./styles.css";

import api from './../../services/api';

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword ] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);

    const history = useHistory();
    
    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path);
    }

    async function loginAutorization(user, password){
        let isAutorization = false;
        let json = null;

        try {
            json = await api.get(`/usuario/${user}`, {auth: { 
                username: user, 
                password: password 
             }});

            if(json.status === 200){
                //localStorage.setItem('_user', user + ":" + password);
                isAutorization = true;      
            }

         }catch(e){
             console.log("erro " + e);
         }
         
         if(isAutorization) {
            history.push("/home");
         } else {
            setInvalidPassword(true);
         }

    }

    return (
        <div className="login-body">
        <div id="container">

        <div className="login"> 
            
            <div className="login-area">
                <h1 className="login-title">Login</h1>
                <input className="input-teste" value={user} type="text" placeholder="E-mail" onChange={ text => {setUser(text.target.value);} }></input>
                <input className="input-teste" value={password} type="password" placeholder="Senha" onChange={ text => {setPassword(text.target.value);} }></input>
                <div className="login-forgot">
                    <ul>
                        <li>Lembrar-me</li>                                
                        <li>Esqueci minha senha</li>                  
                    </ul>
                </div>
                <div>

                {
                    (invalidPassword == true) &&  <div className='invalidPassword'>Senha ou usuário não cadastrado.</div>
                }
                
                </div>

                <div>
                    <button className="login-button"onClick={ evnt => loginAutorization(user, password)}>Entrar</button>                        
                </div>
                
                    
            </div>
            
        </div>
    </div>

    </div>
        )
}

export default Login;