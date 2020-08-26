import React, { useState } from 'react';
import  './Users.css';
import fakeData from '../../fakeData/fakeData';
import UpdateUser from '../UpdateUser/UpdateUser';
import Collect from '../Collection/Collect';



    const Users = () => {
    const users=[...fakeData]

   const [user,setUser]= useState(users);

   const [collect,setCollect]=useState([]);
  

   const handleAddProduct=(user)=>{
       
       const newCollect=[...collect,user]
       setCollect(newCollect);
   }
   
    

   
   return (

       
        <div className="total-container">

            <div className="user-container">

            
                    {
                        user.map(usr=><UpdateUser
                        handleAddProduct={handleAddProduct}
                             user={usr}></UpdateUser>)
                    }

                
                
            </div>

            <div className="cart-container">

            <Collect collect={collect}></Collect>
            

            </div>

            
           

              

            
             
                    
                
                
           

            

           

               

            

            

           
            
        </div>
    );
};

export default Users;