import React from 'react'
import { useState } from 'react'
import axios from 'axios'; 
import { useLocation, useNavigate } from 'react-router-dom';
const Add = () => {

const [book,setBook] = useState({
title:"" , 
desc:"" , 
price:null , 
cover:"" , 
}) ; 


const navigate = useNavigate()
const location = useLocation()
const bookId = location.pathname.split("/")[2]

const handleUpdate = async e => {

e.preventDefault()
try {
  await axios.put("http://localhost:8800/books/"+ bookId ,book)
  navigate("/"); 
  } 
  catch(err) {
    console.log(err);
  }

}


const handleChange = (e) => {

  setBook((prev)=> ({...prev , [e.target.name]: e.target.value}));
};

console.log(book)
  return (
    <div className='add'>
      
<h1>Update your Book</h1>
<div className='wrp'>
<input type="text" placeholder='title' onChange={handleChange} name="title"/>
<input type="text" placeholder='description' onChange={handleChange}  name="desc" />
<input type="number" placeholder='price' onChange={handleChange}  name="price"/>
<input type="text" placeholder='cover' onChange={handleChange}  name="cover" />
</div>

<button className='formButton'  onClick={handleUpdate} >Confirm </button>

    </div>
  )
}

export default Add