import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/UseFirebase';
import Formdetail from './Formdetail';

const Form = () => {
    const {users}=useFirebase()
    const [info,setInfo]=useState([])
    const [money,setMoney]=useState('')
    const [taka,setTaka]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/help')
        .then(res=>res.json())
        .then(data=>{
            setInfo(data)
        })
    },[])

   

   
    
   


    useEffect(()=>{
        fetch('http://localhost:5000/money')
        .then(res=>res.json())
        .then(data=>{
            setTaka(data)
            console.log(data)
        })
    },[])

     
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 m-auto'>
                   {
                    info.map((data)=>{
                        return <Formdetail users={users} info={info}   data={data}/>
                    })
                   }
                   
                  
                </div>

               
            </div>

          
        </div>
    );
};

export default Form;