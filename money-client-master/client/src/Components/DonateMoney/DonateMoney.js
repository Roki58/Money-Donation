import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DonateMoney = () => {
    const [sinleInfo,setSingleInfo]=useState({})
    const [donate,setDonate]=useState({})
   console.log(donate)
    
    
    //console.log(donate)
    const {id}=useParams()
    useEffect(()=>{
           fetch(`http://localhost:5000/help/${id}`)
           .then(res=>res.json())
           .then(data=>{
                setSingleInfo(data)
           }) 
    },[id])

    const handleBlur=(e)=>{
       //setDonate(donate + e.target.value)
       const field = e.target.name;
       const value = e.target.value
       const newData = { ...donate };
      // const {users}=useFirebase()
       newData[field] = value
       setDonate(newData)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(sinleInfo)
        fetch(`http://localhost:5000/donatemoney/${id}`,{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donate)
        }).then(res=>res.json())
        .then(data=>{
            alert(data)
        })

    }
    return (
        <div className='container'>
        <div className='row mt-5'>
            <div className='col-md-3'>
                <div className='card bg-light'>
                <p>pateint-name:{sinleInfo?.name}</p>
                            <p>patient-gender:{sinleInfo?.gender}</p>
                            <p>patient-age:{sinleInfo?.age}</p>
                            <p>pateint-disease:{sinleInfo?.patient_disease}</p>
                            <p>pateint-occupation:{sinleInfo?.patient_occupation}</p>
                            <p>patient-problem:{sinleInfo?.helpSeekerInfo}</p>
                            <p>pateint -blood-gorup:{sinleInfo?.blood_group}</p>
                            
                            <h6>Total-Money-Needed:{sinleInfo?.total_money}</h6>
                            
                </div>
            
            </div>
            <div className='col-md-4 bg-light m-auto'>
                <h6>Donate Money</h6>
                <form onSubmit={handleSubmit}>
                    <input name="donate_money" className='form-control' type="number" onBlur={handleBlur} placeholder='Enter donate money'/>
                    <br/>
                    <input className='btn btn-success' type="submit" value="Donate-Money"/>
                </form>
            </div>
           
        </div>
        </div>
    );
};

export default DonateMoney;