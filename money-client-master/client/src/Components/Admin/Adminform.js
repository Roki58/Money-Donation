import React, { useState } from 'react';

const Adminform = () => {
    const [helpSeekerData,setHelpSeekerData]=useState({})
    const handleBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...helpSeekerData };
        newData[field] = value
        setHelpSeekerData(newData)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/helppost',{
            method: 'post',
            headers: {
              
                'content-type': 'application/json'
            },
            body: JSON.stringify(helpSeekerData)
        }).then(res=>res.json())
        .then(data=>{
            alert(data)
        })
       // alert("Data added successfully")
    }
    return (
        <div className="container ">
            <div className='row mt-5'>
                <div className='col-md-4 m-auto bg-light'>
                <form onSubmit={handleSubmit}>
                <input className='form-control' onBlur={handleBlur} name="name" type="text" placeholder='Enter patient Name'/>
               
                <input className='form-control' onBlur={handleBlur} type="text" name="phone_no" placeholder="Enter contact-no"/>
                
                <input className='form-control' onBlur={handleBlur} type="text" name="gender" placeholder="Enter Gender"/>
               
                <input className='form-control' onBlur={handleBlur} type="number"  name="age" placeholder="Enter age"/>
               
                <input className='form-control' onBlur={handleBlur} type="text" name="patient disease" placeholder="Enter disease "/>
                
                <input className='form-control' onBlur={handleBlur} type="text" name="patient_occupation" placeholder='Enter-patient-occupation'/>
               
                <input className='form-control' type="text" name="blood_group" placeholder='Enter Blood-group'  onBlur={handleBlur}/>
               
            <textarea className='form-control' onBlur={handleBlur} placeholder="Enter pateint Details" name="helpSeekerInfo" ></textarea>
           <br/>
            <input className='form-control' onBlur={handleBlur} placeholder="Enter total-money" name="total_money" type="number"/>
           
            <br/>
            <input className='btn btn-success ' type="submit" value="need money"/>
            </form>
                </div>
            </div>
            
          
        </div>
    );
};

export default Adminform;