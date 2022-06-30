import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gistdemo() {
  
    const[users,setUsers]=useState([])

    const FetchUsers=()=>{
        console.log("clicked");
         axios.get("http://localhost:3000/user")
         .then((response)=>{
             console.log(response);
             //console.log(news.length);
             setUsers(response.data);
         })
    }
  
  
    return (
    <div>

        <button className = 'btn btn-primary' onClick={FetchUsers}>
        NEWS
        </button>
        {
                    users && users.length ?
                    users.map((value)=>{
                        return(
                            <div className='col-4'>
                                <ul className="list-group">
                                    <li className="list-group-item">{value.uname}</li>
                                    <li className="list-group-item">{value.pass}</li>
                                </ul>
                            </div>
                            );
                        }
                    ):
                    null
                }
        
    </div>
  
  
  )


}

export default Gistdemo