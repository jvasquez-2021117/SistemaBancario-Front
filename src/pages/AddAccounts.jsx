import React from 'react'
import { SiberBar } from '../components/Sidebar/SiberBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export const AddAccounts = () => {

    const [typeAccount, setTypeAccount] = useState({});

    const getTypeRoom = async()=>{
        try{
            const data = await axios.get('http://localhost:3200/typeAccount/get');
            setTypeRoom(data);
        }catch(e){
            console.log(e);
        }
    }

  return (
        <>
            <SiberBar></SiberBar>
                <div className="mother">
                    <div className="container1">
                        <div className="title">
                            <p>Add Account</p>
                        </div>
                        <form action="#">
                            <div className="user_details">
                                <div className="input_box">
                                    <label htmlFor="inputName">Type Account</label>
                                    <select className='form-control'>
                                        {
                                           typeAccount.map(({_id, name}, i)=>{
                                                return(
                                                    <option key={i} value={_id}>{name}</option>
                                                )
                                           }) 
                                        }
                                    </select>              
                                </div>
                                <div className="input_box">
                                    <label htmlFor="inputUsername">User</label>
                                    <select className='form-control'>
                                        <option value="1">Nose</option>
                                    </select>   
                                </div>
                            </div>
                            <div className="reg_btn">
                                <button type='button' >AddAccount</button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
  }
