import React from 'react'
import { useState } from 'react'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
const Add = () => {

const [book,setBook] = useState({
title:"" , 
desc:"" , 
price:null , 
cover:"" , 
}) ; 


const navigate = useNavigate()

const handleAdd = async e => {

e.preventDefault()

try {
await axios.post("http://localhost:8800/books",book)
navigate("/")
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
      
<h1>Add a new Book</h1>
<div className='wrp'>
<input type="text" placeholder='title' onChange={handleChange} name="title"/>
<input type="text" placeholder='description' onChange={handleChange}  name="desc" />
<input type="number" placeholder='price' onChange={handleChange}  name="price"/>
<input type="text" placeholder='cover' onChange={handleChange}  name="cover" />
</div>

<button className='formButton'  onClick={handleAdd} >Add</button>

    </div>
  )
}

export default Add