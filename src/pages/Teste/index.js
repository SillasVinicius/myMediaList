import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import api from './../../services/api';

const Teste = () => {
/*
    auth: {
        username: "user",
        password: "admin"
     }*/

  async function fetchData() {
    

     const teste = await api.get('http://localhost:8080/tipo',{
        auth: { 
           username: 'user', 
           password: 'admin' 
        }
    } );
      
      console.log(teste);

   }
  
   fetchData();

  return (
   <h1>teste</h1>
  );
}

export default Teste;
