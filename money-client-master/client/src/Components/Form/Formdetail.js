import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Formdetail = ({data,t}) => {
    const [taka,setTaka]=useState([])
    //console.log(data)
    useEffect(()=>{
        fetch('http://localhost:5000/money')
        .then(res=>res.json())
        .then(data=>{
            setTaka(data)
            //console.log(data)
        })
    },[])
    let sum=0;
    taka.forEach((el)=>{
        console.log(el.donate_money)
        sum+=parseInt(el.donate_money);
        
    })

    


    // const t=info.total_money - data.money;
     //console.log(t)
    return (
        <div className='mt-5'>
             <div className='card'>
                        <div className='card-body bg-light mit-5'>
                            <p>pateint-name:{data?.name}</p>
                            <p>patient-gender:{data?.gender}</p>
                            <p>patient-age:{data?.age}</p>
                            <p>pateint-disease:{data?.patient_disease}</p>
                            <p>pateint-occupation:{data?.patient_occupation}</p>
                            <p>patient-problem:{data?.helpSeekerInfo}</p>
                            <p>pateint -blood-gorup:{data?.blood_group}</p>
                            
                            <h6>Total-Money-Needed:{data?.total_money}</h6>
                            <h6>Money Colleccted: {sum}</h6>
                            
                              <Link to={`donate/${data?._id}`}><button className='btn btn-warning'>Please Donate as you can</button></Link>
                                
                            
                        </div>
                    </div>
            
             {/* <p>Money Needed:{t}</p> */}


        </div>
    );
};

export default Formdetail;