/** @format */


import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./TableManageInventory.css";
import deleteButton from '../../image/whitebutton-removebg-preview.png'
import {Helmet} from "react-helmet-async";
const TableManageInventory = () => {
    const navigate=useNavigate()

    const [books, setBooks] = useState([]);
    useEffect(function () {
      fetch("http://localhost:5000/book")
        .then(res => res.json())
        .then(data => setBooks(data));
    });

    const handleDeleteButton =(id)=>{
       
            const procced=window.confirm('Are You sure Want to delete this book?')
            if( procced){
                const url=`http://localhost:5000/book/${id}`
                fetch(url,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    const remaining=books.filter(book=>book._id !==id)
                    setBooks(remaining)
                })
            }
        
    }
 
  return (
    <div>
      <table>
      
        <thead className="bg-dark">
        <tr>   <th>Item</th>
            <th>Product Name</th>
            <th>Publisher</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>update</th>
            <th>Delete</th>
          </tr>
        </thead>
       
       <tbody>
        {
            books.map((book,index)=>   
            <tr >
                   <td>{index+1}</td>
              <td>{book.name}</td>
              <td>{book.publisher}</td>
              <td>{book.quantity}</td>
              <td>{book.price}</td>
              <td className="text-primary" onClick={()=>{
                  navigate(`/book/${book._id}`)

              }}>update</td>
              <td><button onClick={()=>{
                  handleDeleteButton(book._id)
              }} className="btn bg-none border-0">
               <img style={{width:"25px",color:"white"}} src={deleteButton} alt="" />
               </button></td>
              
             
            </tr>)
        }
        
       </tbody>
      </table>
      <Helmet>
        <title>manage-item</title>
      </Helmet>
    </div>
  );
};

export default TableManageInventory;
