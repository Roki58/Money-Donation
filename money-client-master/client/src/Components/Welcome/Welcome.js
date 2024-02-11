import React from 'react';
import './Welcome.css'
const Welcome = () => {
    const date=new Date().toLocaleTimeString()
    const dates=new Date()
    const p=dates.getHours()
    console.log(p)
    let time='close';
    if(p>=10 && p<17)
    {
        time='open'
    }
    return (
        <div className='welcome'>
            <div className='row pt-2'>
                <div className='col-md-4 m-auto bg-info text-dark'>
                <h5>WELCOME TO MBSTU SEMINER LIBRARY</h5>
            <p>OPENING TIME:10.00 AM</p>
            <p>CLOSING TIME:5.00 PM</p>
            <p>NOW IT IS :{date}</p>
            <p>{time}</p>

                </div>
          

            </div>
          
        </div>
    );
};

export default Welcome;