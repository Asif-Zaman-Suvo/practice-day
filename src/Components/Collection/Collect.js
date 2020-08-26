import React from 'react';
import './Collect.css';

const Collect = (props) => {

    const collect=props.collect;
    console.log(collect)
    const totalSalary=collect.reduce((totalSalary,user)=>totalSalary+user.salary,0)

    return (
        <div className='collectSalary'>

            <h4>Player Summary</h4>

            <p>Player Added:{collect.length}</p>

            <p><b>Total Salary:{totalSalary}$</b></p>
            
        </div>
    );
};

export default Collect;