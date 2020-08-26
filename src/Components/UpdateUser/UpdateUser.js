import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './UpdateUser.css';

const UpdateUser = (props) => {
    

    const { img, name, email, phone, salary } = props.user;

    const { city, street } = props.user.address;
    return (
        <div className="newUser">

            <div>

                <img src={img} alt="" />

            </div>


            <div>

                <h4 className='userName'>{name}</h4>
                <br></br>

                <p><b>Email:{email}</b></p>

                <p>Phone:{phone}</p>
                <h4>Salary:{salary}$</h4>

                <h5>City: {city}</h5>

                <h5>Street: {street}</h5>

                <button 
                className='main-button'
                 onClick={()=>props.handleAddProduct(props.user)}

                 ><FontAwesomeIcon icon={faPlus} />  Add {name}</button>
            </div>



        </div>
    );
};

export default UpdateUser;